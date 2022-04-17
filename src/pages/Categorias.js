import React from 'react';
import FormCategorias from '../components/categorias/FormCategorias';
import TableCategoria from '../components/categorias/TableCategoria';
import ToolbarCategoria from '../components/categorias/ToolbarCategoria';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
//import ClienteContext from '../context/clienteContext';
import { CategoriaContextProvider } from '../context/categoriaContext';

const Categorias = () => {
    return ( 
       <Layout>
            <CategoriaContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Categorias Tecnologicas
                    </div>
                    <div className='box'>
                        <ToolbarCategoria />
                        <TableCategoria />
                    </div>
                </div>
                <Modal>
                    <FormCategorias />
                </Modal>
            </CategoriaContextProvider>
        </Layout>    
     );
}
 
export default Categorias;