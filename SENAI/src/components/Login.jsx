import React, {useState} from "react";
import '../styles/login.css'
import { Link } from 'react-router-dom'
import {logInWithEmailAndPassword} from '../firebase'

const Login = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="containers">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Email" onChange={(event) => setUser(event.target.value)}/>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" onChange={(event) => setPass(event.target.value)}/>
                        </div>
                        <button className="button login__submit" onClick={(event) => logInWithEmailAndPassword(event, user, pass)}>
                            <span className="button__text">Log In</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>

                        <div className="back">
                            <Link to="/">
                                <button className="bvoltar">Back</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;