import "./house.css";
import React, { useState } from 'react';
import feedbackIcon from "./feedback.jfif";
import Inquiry from "./Inquiry";
import 'bootstrap/dist/css/bootstrap.min.css'

const House = ( {house}) => {

    const [inquiryShown,setInquiryShown] = useState(false);

    const inquiryClick = () =>{
        setInquiryShown(!inquiryShown);
    };

    return (
        <div>
            <div className="row">
                <h5 className="col-md-12"> {house.country}</h5>
                
            </div>
            <div className="row">
                <h5 className="col-md-12"> {house.address}</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="house" />
                </div>
                <div className="col-md-5">
                    <p className="price"> $ {house.price} </p>
                    <p> {house.description} </p>
                    <img src={feedbackIcon} alt="feedback" height="50" onClick={inquiryClick}/>
                    {inquiryShown && <Inquiry house={house} /> }
                </div>

            </div>
            
        </div>
    );
};

export default House;