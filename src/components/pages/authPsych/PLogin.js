import React,{useState,useContext,useEffect} from "react";
import {Redirect} from "react-router-dom";

import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";

const PLogin = () => {

    const authContext = useContext(AuthContext);
    const {psychiatristLogin,isAuthenticated,error,clearErrors} = authContext

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;
    
    const [psychiatrist,setPsychiatrist] = useState({
        email:"",
        password:"",
        redirect:false
    });

    const {email,password,redirect} = psychiatrist

    const onChange = (e) => {
        setPsychiatrist({...psychiatrist,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        if(isAuthenticated){
            setPsychiatrist({redirect:true});
        }
        if(error){
            setAlert(error);
            clearErrors();
        }
        
    },[isAuthenticated,error,redirect])
    
    if(redirect){
        return (<Redirect to = "/vp/psychiatrist/" />)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        psychiatristLogin({email,password});
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Email</label><br/>
                <input type = "email" name = "email" value = {email} onChange = {onChange} required placeholder = "email"/><br/>
                <label>Password</label><br/>
                <input type = "password" name = "password" value = {password} onChange = {onChange} required placeholder = "password"/><br/> 
                <input type = "submit" value = "submit" />
            </form>
        </div>
    )
}

export default PLogin;