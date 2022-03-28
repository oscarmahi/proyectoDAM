import React from 'react';
import FormCursos from '../components/cursos/FormCursos';
import TableCurso from '../components/cursos/TableCurso';
import ToolbarCurso from '../components/cursos/ToolbarCurso';
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import { CursoContextProvider } from '../context/cursoContext';

const Cursos = () => {
    return ( 
        <Layout>
            <CursoContextProvider>
                <div className="panel">
                    <div className="panel heading">
                        Cursos
                    </div>
                    <div className='box'>
                        <ToolbarCurso />
                        <TableCurso />
                    </div>
                </div>
                <Modal>
                    <FormCursos />
                </Modal>
            </CursoContextProvider>
        </Layout>
     );
}
 
export default Cursos;