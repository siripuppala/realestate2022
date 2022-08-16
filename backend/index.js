// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'realestateproject',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to realestateproject database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    ename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    remarks: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Enquiries = mongoose.model('enquiries', UserSchema);
Enquiries.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const enquiry = new Enquiries(req.body);
        let result = await enquiry.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("could not store enquiry");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5000);