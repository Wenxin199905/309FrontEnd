
import PropTypes from 'prop-types';
import styles from './PaymentMethod.module.css';

// const PaymentMethod = () => (
//   <div className={styles.PaymentMethod}>
//     PaymentMethod Component
//   </div>
// );

import $ from 'jquery';
import React, {useEffect, useState} from "react";
import {useContext} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import {useNavigate, useParams} from "react-router-dom";

const PaymentMethod = ()=>{
    const [payment, setPayment] = useState({});
    const [paymentData, setPaymentData] = useState(
        {id: -1, username:'', email:'', password1: '', cc_number:'', cc_expiry:'', cc_code:''});
    // Django-credit-card-api: https://pypi.org/project/django-credit-cards/

    let navigate = useNavigate();

    let ccNumberChange = (event) => {

        setProfileData({...profileData, cc_number: event.target.value})
    }

    let ccExpiryChange = (event) => {

      setProfileData({...profileData, cc_expiry: event.target.value})
    }

    let ccCodeChange = (event) => {

      setProfileData({...profileData, cc_code: event.target.value})
    }

    let Edit = (event) => {
        let cc_number = document.getElementById("cc_number").value
        let cc_expiry = document.getElementById("cc_expiry").value
        let cc_code = document.getElementById("cc_code").value
        
        let ccNumberCheck = cc_number !== ''
        let ccExpiryCheck = cc_expiry !== ''
        let ccCodeCheck = cc_code !== ''
        
        if(!ccNumberCheck){$("#cc_numberN").html("Please filled the required content.")}
        if(!ccExpiryCheck){$("#cc_expiryN").html("Please filled the required content.")}
        if(!ccCodeCheck){$("#cc_codeN").html("Please filled the required content.")}

        if (!(ccNumberCheck && ccExpiryCheck && ccCodeCheck)){return}
        
        const formData = new FormData();
        formData.append('cc_number', cc_number);
        formData.append('cc_expiry', cc_expiry);
        formData.append('cc_code', cc_code);
        
        const requestOptions = {

          // Require Login

            method: 'PUT',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("access")},
            body:formData
        };
        fetch("http://192.168.2.15:3000/paymentmethod/edit", requestOptions)
            .then(response => response.json())
            .then(jason => console.log(jason))
            // .then(()=>navigate('/profile/'))
            .catch()
    }

    // Go back to profile setting

    // let toBack = (event) => {
    //     return navigate("/profile/")
    // }

    
    // Here is required login process and change payment method data

    // if(profileData.id === -1){
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},

    //         body: JSON.stringify({username: localStorage.getItem("username"), password: localStorage.getItem("password")})
    //     };

    //     fetch("http://192.168.2.15:3000/accounts/api/token/", requestOptions)
    //         .then(response => response.json())
    //         .then(jason => {
    //             localStorage.setItem("access", jason.access)
    //         })
    //         .catch()
    //     const profile_options = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + localStorage.getItem("access")},}
    //     fetch("http://192.168.2.15:3000/accounts/profile/", profile_options)
    //         .then(response => response.json())
    //         .then(jason => {
    //             setProfile(jason)
    //             setProfileData({cc_number: jason.cc_number, cc_expiry:jason.cc_expiry, cc_code:jason.cc_code})
    //         })
    //         .catch()
    // }


    return<>
        <div className="editPaymentMethod">
            <br/>
            <br/>
            <div className="row editPaymentMethod">
                <div className="col-md-3 editPaymentMethod">
                    <div className="contact-inf editPaymentMethod">
                        {/* <img src={formLogo}  alt="image" id="small_image"/> */}

                        <h3 className="editPaymentMethod hh3">Edit PaymentMethod</h3>
                        <h4 className="editPaymentMethod">Change you PaymentMethod for Subscription</h4>
                    </div>
                </div>
                <div className="col-md-9 editPaymentMethod">
                    <div className="contact-for editPaymentMethod">
                        <div className="form-group editPaymentMethod">
                            <label className="control-label col-sm-10 editPaymentMethod" htmlFor="cc_number">
                                cc_number: <span id="cc_numberN" style={{color:"red"}}/></label>
                            <div className="col-sm-10 editPaymentMethod">
                                <input type="text" className="form-control editPaymentMethod" id="cc_number"
                                       placeholder="New cc_number" name="fcc_number" onChange={ccNumberChange}
                                       value={profileData.cc_number}/>
                            </div>
                        </div>
                        <br/>


                        <div className="form-group editPaymentMethod">
                            <label className="control-label col-sm-10 editPaymentMethod" htmlFor="cc_code">
                                cc_number: <span id="cc_codeN" style={{color:"red"}}/></label>
                            <div className="col-sm-10 editPaymentMethod">
                                <input type="text" className="form-control editPaymentMethod" id="cc_code"
                                       placeholder="New cc_code" name="fcc_code" onChange={ccCodeChange}
                                       value={profileData.cc_code}/>
                            </div>
                        </div>
                        <br/>

                        <div className="form-group editPaymentMethod">
                            <label className="control-label col-sm-10 editPaymentMethod" htmlFor="cc_expiry">
                                cc_number: <span id="cc_expiryN" style={{color:"red"}}/></label>
                            <div className="col-sm-10 editPaymentMethod">
                                <input type="text" className="form-control editPaymentMethod" id="cc_expiry"
                                       placeholder="New cc_expiry" name="fcc_expiry" onChange={ccExpiryChange}
                                       value={profileData.cc_expiry}/>
                            </div>
                        </div>
                        <br/>

                        <br/>
                        <div className="form-group editPaymentMethod">
                            <div className="col-sm-offset-2 col-sm-10 editPaymentMethod">
                                <button className="btn btn-default button11" onClick={Edit}>Submit
                                </button>
                                {/* <button className="button0 editPaymentMethod" onClick={toBack}
                                        style={{width:"15%", height:"10%"}}>Back</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    </>
}


export default PaymentMethod;
