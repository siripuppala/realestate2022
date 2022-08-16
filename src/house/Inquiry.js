import React from 'react';
import {useState} from "react";
import emailjs from 'emailjs-com';

const Inquiry = () => {

    const [contactInfo,setContactInfo]= useState( { 
        ename: "",
        email:"",
        remarks:""
    }
    );

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    /*
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(contactInfo);




        // serviceid, templateid,e.target, userid
        emailjs.sendForm('service_htqamqb','template_1p165ir',e.target,'user_HMJ4Z9ytrdOr3joBaT0v0')
        .then( (result) => { 
            //console.log(result.text);
            console.log(result);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();

            // code to store in db to express js

    };
*/

const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(contactInfo);
    let {ename,email,remarks} = contactInfo;    
    console.log(ename);  
    console.log(email);  
    console.log(remarks);
    let result = await fetch(
    'http://localhost:5000/register', {
        method: "post",
        body: JSON.stringify({ename,email,remarks}),
        headers: {
            'Content-Type': 'application/json',
                'Accept': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved successfully");        
    }
}

    return (
        <form className="mt-2" action="">
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="ename" type="text" 
                placeholder="Name"
                value={contactInfo.ename}
                onChange={onChange}
                className="form-control"
                name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={contactInfo.email}
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text"
                value={contactInfo.remarks}
                className="form-control"
                placeholder="Remarks"
                name="remarks"
                onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-2"
            disabled={ !contactInfo.name || !contactInfo.email }
            value="submit" onClick={handleOnSubmit}>  Submit </button>

            <button type="submit" onClick={handleOnSubmit}>submit</button>

           
            
        </form>
    );
};

export default Inquiry;