import React from 'react';
import FormClientes from '../components/clientes/FormClientes';
import TableCliente from '../components/clientes/TableCliente';
import ToolbarCliente from '../components/clientes/ToolbarCliente';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
//import ClienteContext from '../context/clienteContext';
import { ClienteContextProvider } from '../context/clienteContext';

const Clientes = () => {
    return (
        <Layout>
            <ClienteContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Clientes
                    </div>
                    <div className='box'>
                        <ToolbarCliente />
                        <TableCliente />
                    </div>
                </div>
                <Modal>
                    <FormClientes />
                </Modal>
            </ClienteContextProvider>
        </Layout>
    );
}

export default Clientes;
