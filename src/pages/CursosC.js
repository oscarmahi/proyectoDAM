import React from 'react';
import TableCursoC from '../components/cursosC/TableCursoC';
import Layout from '../components/commons/Layout';
import { CursoContextCProvider } from '../context/cursoContextC';

const CursosC = () => {
    return ( 
        <Layout>
            <CursoContextCProvider>
                <div className="panel">
                    <div className="panel heading">
                        Cursos Consulta
                    </div>
                    <div className='box'>
                        <TableCursoC />
                    </div>
                </div>

            </CursoContextCProvider>
        </Layout>
     );
}
 
export default CursosC;