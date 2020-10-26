import React,{useState,useContext,useEffect} from "react";
import {Redirect} from "react-router-dom";

import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
import { CLEAR_ERRORS } from "../../../types";

const PSignup = (props) => {

    const authContext = useContext(AuthContext);
    const {registerPsychiatrist,isAuthenticated,role,error,clearErrors} = authContext;

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;

   const [psych,setPsych] = useState({
        name:"",
        email:"",
        password:"", 
        password2:"",
        redirect:false
    });

    const {name ,email , password , password2,redirect} = psych;

    useEffect(() => {
        if(isAuthenticated && role === "psychiatrist"){
            setPsych({redirect:true})
        }
        if(error){
            setAlert(error)
            clearErrors()
        }
    },[isAuthenticated,role,redirect,error])

   
    if(redirect){
        return (<Redirect to = "/vp/psychiatrist/" />)
    }

    const onChange = (e) => {
        setPsych({...psych,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Password doesn't match")
        }
        else{
            registerPsychiatrist({
                name,
                email,
                password
            })
        }
       
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label htmlFor = "name" >Username</label><br/>
                <input type = "text" name = "name" value = {name} onChange = {onChange} required/><br/>
                <label htmlFor = "email">Email</label><br/>
                <input type = "email" name = "email" value = {email} onChange = {onChange} required/><br/>
                <label htmlFor = "password">Password</label><br/>
                <input type = "password" name = "password" value = {password} minLength = "6" onChange = {onChange} required/><br/>
                <label htmlFor = "password2">Confirm Password</label><br/>
                <input type  = "password" name = "password2" value = {password2} minLength = "6" onChange = {onChange} required /> <br/>
                <input type = "submit" value = "SignUp"/>
            </form>
        </div>
    )
    

}

export default PSignup;
