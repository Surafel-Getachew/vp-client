import React,{useState,useContext} from "react";
import AlertContext from "../../../context/alert/alertContext";

const SignUp = () => {

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;

    const [user,setUser] = useState({
        name:"",
        emial:"",
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
            console.log("Registeration submited");
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
                <button type = "submit">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;