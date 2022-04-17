import React from 'react';
import FormTecnologias from '../components/tecnologias/FormTecnologias';
import TableTecnologia from '../components/tecnologias/TableTecnologia';
import ToolbarTecnologia from '../components/tecnologias/ToolbarTecnologia';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import { TecnologiaContextProvider } from '../context/tecnologiaContext';

const Tecnologias = () => {
    return (  
        <Layout>
            <TecnologiaContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Tecnologias
                    </div>
                    <div className='box'>
                        <ToolbarTecnologia />
                        <TableTecnologia />
                    </div>
                </div>
                <Modal>
                    <FormTecnologias />
                </Modal>
            </TecnologiaContextProvider>
        </Layout>        
    );
}
 
export default Tecnologias;