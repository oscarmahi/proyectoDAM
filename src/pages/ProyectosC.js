import React from 'react';
import TableProyectoC from '../components/proyectosC/TableProyectoC';
import Layout from '../components/commons/Layout';
import { ProyectoContextCProvider } from '../context/proyectoContextC';

const ProyectosC = () => {

    return ( 
        <Layout>
            <ProyectoContextCProvider>
                <div className="panel">
                    <div className="panel heading">
                        Proyectos Consulta
                    </div>
                    <div className='box'>
                        <TableProyectoC />
                    </div>
                </div>
            </ProyectoContextCProvider>
        </Layout>        
     );

}
 
export default ProyectosC;