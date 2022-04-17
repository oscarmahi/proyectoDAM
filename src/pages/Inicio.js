import React from 'react';
import Layout from '../components/commons/Layout';

const Inicio = () => {

    return (         
        <Layout>
           <div>
           <p className="has-text-success is-size-3">PLATAFORMA EDUCATIVA EMPRESARIAL</p>
           <br></br><br></br>
           <figure className="image is-256x256">
               {/*<img src="../public/logo.jpeg" alt="imagen Inicio"/>*/}
               <img src="logo.jpeg" alt="imagen Inicio"/>
            </figure>
            </div>
        </Layout>
     );
}
 
export default Inicio;