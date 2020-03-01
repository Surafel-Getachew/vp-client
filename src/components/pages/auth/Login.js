import React from "react"
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <div>
            <form>
                <label>Email</label><br/>
                <input type = "email" name = "email" placeholder = "email" /><br/>
                <label>Password</label><br/>
                <input type = "password" name = "password" placeholder = "password" /><br/>
                <button type = "submit">Login</button><br/>
            </form>
            <Link to = "/SignUp">don't have an account?</Link>
        </div>
    )
}

export default Login;