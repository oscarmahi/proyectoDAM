import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../commons/Header';
import Swal from 'sweetalert2';
import { SesionContext } from '../../context/sesionContext';

const FormLogin = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setSesion } = useContext(SesionContext);

    const comprobarAcceso = async () => {
        //const resultado = await Axios.get('http://localhost:9090/api/clientes');
        //const resultado = await Axios.get('http://localhost:9090/api/usuarios/byusuariopassword/?usuario=oscarmahi@gmail.com&password=oscar');

        const resultado = await Axios.get(`http://localhost:9090/api/usuarios/byusuariopassword/?usuario=${usuario}&password=${password}`);
        //console.log(resultado);
        if (resultado.data !== ""){
            //console.log(resultado.data);
            //console.log(resultado.data.usuario);
            //console.log(resultado.data.password);
            //console.log('usuario:'+usuario);
            //console.log('password'+password);
            var r = resultado.data.roles.rol;
            //console.log(r);
            if ((resultado.data.usuario === usuario) && (resultado.data.password === password)){
                //console.log('rol que pasa:'+r);
                setSesion(r);
                navigate('/inicio');
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Login Incorrecto. Inténtelo de nuevo',
                toast: true
            });
            navigate('/');
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`${usuario}, ${password}`);
        comprobarAcceso();
    }

    return (
        
        <section className="hero is-primary is-fullheight">
            <Header/>
            <div className="mx-3 is-size-6 has-text-black">PLATAFORMA EDUCATIVA EMPRESARIAL</div>
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