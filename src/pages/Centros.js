import React from 'react';
import FormCentros from '../components/centros/FormCentros';
import TableCentro from '../components/centros/TableCentro';
import ToolbarCentro from '../components/centros/ToolbarCentro';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
//import ClienteContext from '../context/clienteContext';
import { CentroContextProvider } from '../context/centroContext';

const Centros = () => {
    return ( 
        <Layout>
            <CentroContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Centros
                    </div>
                    <div className='box'>
                        <ToolbarCentro />
                        <TableCentro />
                    </div>
                </div>
                <Modal>
                    <FormCentros />
                </Modal>
            </CentroContextProvider>
        </Layout>        
     );
}
 
export default Centros;
