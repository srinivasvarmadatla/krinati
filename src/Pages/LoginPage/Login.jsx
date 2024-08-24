import React from "react";
import "./Login.css";

function Login() {

    return (
        <div className="container_glass">
            <form>
                <div className="LOGIN_HEAD">
                    <h2>LOGIN</h2>
                </div>
                <div className="username">
                    <input type="text" id="Username" placeholder="Username" />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="Password">
                    <input type="password" id="Password" placeholder="Password" />
                    <i className='bx bxs-lock-alt'></i>
                    <br />
                </div>
                <div className="check_area">
                    <div className="Remember_me">
                        <input type="checkbox" id="checkboxcheck" required />
                        <label htmlFor="checkboxcheck">Remember me</label>
                    </div>
                    <div className="forget_password">
                        <a href="#">Forget password?</a>
                    </div>
                </div>
                <div className="submit">
                    <button type="submit">LOGIN</button>
                </div>
                <div className="already_exist">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
