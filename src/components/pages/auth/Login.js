import React,{useState,useContext,useEffect} from "react";
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
import {Link} from "react-router-dom";


const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext

    const authContext = useContext(AuthContext);
    const {login,isAuthenticated,error,clearErrors} = authContext;

    const [user,setUser] = useState({
       
        email:"",
        password:""
    })

    const {email,password} = user;

    useEffect(() => {
        
        if(isAuthenticated){
            props.history.push("/")
        }

        if(error === "User doesn't exist"||"Invalid Email or Password"){
            setAlert(error);
            clearErrors()
        }
        
    },[isAuthenticated,error,clearErrors])

    const onSubmit = (e) => {
        e.preventDefault()
        login(user);
    }

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Email</label><br/>
                <input type = "email" value = {email} onChange = {onChange} name = "email" placeholder = "Email" required/><br/>
                <label>Password</label><br/>
                <input type = "password" value = {password} onChange = {onChange} name = "password" placeholder = "Password" required /><br/>
                <button type = "submit">Login</button><br/>
            </form>
            <Link to = "/SignUp">don't have an account?</Link>
        </div>
    )
}

export default Login;