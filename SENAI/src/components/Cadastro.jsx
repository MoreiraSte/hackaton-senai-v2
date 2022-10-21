import React from "react";
import '../styles/cadastro.css'
import { Link } from 'react-router-dom'

const Cadastro = () => {
    return (
        <div className="containerss">
            <div className="screen">
                <div className="screen__content">
                    <form className="cadastro">
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-user"></i>
                            <input type="text" className="cadastro__input" placeholder="User name" />
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-user"></i>
                            <input type="text" className="cadastro__input" placeholder="Email" />
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-lock"></i>
                            <input type="password" className="cadastro__input" placeholder="Password" />
                        </div>
                        <div className="cadastro__field">
                            <i className="cadastro__icon fas fa-lock"></i>
                            <input type="password" className="cadastro__input" placeholder="Password Again" />
                        </div>
                        <button className="button cadastro__submit">
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