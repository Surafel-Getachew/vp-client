import React,{useState,useContext} from "react";

import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";

const SignUp = () => {

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {register} = authContext;
    

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
    })
    
    const {name ,email , password , password2} = user; 
    
    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert("Password doesn't match")
        }
        else{
            register({
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

export default SignUp;