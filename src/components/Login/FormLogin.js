import React, { useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
import Header from '../commons/Header';

const FormLogin = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${usuario}, ${password}`);
        inicio();
    }

    const inicio = () => {
        setUsuario('');
        setPassword('');
        //navigate('/clientes');
    }

    return (
        
        <section className="hero is-primary is-fullheight">
            <Header/>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" 
                                                placeholder="neo@matrix.com" 
                                                className="input"
                                                onChange={(e) => setUsuario(e.target.value)}
                                                value={usuario} 
                                                required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input 
                                        type="password" 
                                        placeholder="**********" 
                                        className="input" 
                                        onChange={(e) => setPassword(e.target.value)}
                                        value = {password}
                                        required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-success">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormLogin;