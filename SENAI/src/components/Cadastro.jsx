import React, { useState } from "react";
import '../styles/cadastro.css'
import { Link } from 'react-router-dom'
import { registerWithEmailAndPassword } from "../firebase";

const Cadastro = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [rePass, setRePass] = useState("")

    function register(event){
        event.preventDefault();

        if(pass != rePass)
            return alert('As senhas não conhecidem!')

        if(email == "" || pass == "" || rePass == "")
            return alert('Preencha todos os campos!')

        registerWithEmailAndPassword(email, pass)

        // setPass("")
        // setEmail("")
        // setRePass("")
    }

    return (
        <div className="containerss">
            <div className="screen">
                <div className="screen__content">
                    <form className="cadastro">
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-user"></i>
                            <input type="text" className="cadastro__input" placeholder="User name"/>
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-user"></i>
                            <input type="text" className="cadastro__input" placeholder="Email"  onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-lock"></i>
                            <input type="password" className="cadastro__input" placeholder="Password"  onChange={(event) => setPass(event.target.value)}/>
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-lock"></i>
                            <input type="password" className="cadastro__input" placeholder="Password Again" onChange={(event) => setRePass(event.target.value)}/>
                        </div>
                        <button className="button cadastro__submit" onClick={(event) => register(event)}>
                            <span className="button__text">Cadastrar</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <div className="back">
                            <Link to="/">
                                <button className="bvoltarr">Back</button>
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

export default Cadastro;