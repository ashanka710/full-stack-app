import React from "react";
import './login.css'
const Login = () => {
    return ( <
        div >
        <h2> Login Page </h2> <form>
        <input type = "email"
        placeholder = "Email"/>
        <input type = "password"
        placeholder = "Password"/>
        <button type = "submit"> Login </button> </form> </div>
    );
};

export default Login;