import React from 'react';
import FormProyectos from '../components/proyectos/FormProyectos';
import TableProyecto from '../components/proyectos/TableProyecto';
import ToolbarProyecto from '../components/proyectos/ToolbarProyecto';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
//import ClienteContext from '../context/clienteContext';
import { ProyectoContextProvider } from '../context/proyectoContext';


const Proyectos = () => {

    return ( 
        <Layout>
            <ProyectoContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Proyectos
                    </div>
                    <div className='box'>
                        <ToolbarProyecto />
                        <TableProyecto />
                    </div>
                </div>
                <Modal>
                    <FormProyectos />
                </Modal>
            </ProyectoContextProvider>
        </Layout>        
     );

}
 
export default Proyectos;