import React from 'react';
import TableCentroC from '../components/centrosC/TableCentroC';
import Layout from '../components/commons/Layout';
import { CentroContextCProvider } from '../context/centroContextC';

const CentrosC = () => {
    return ( 
        <Layout>
            <CentroContextCProvider>
                <div className="panel">
                    <div className="panel heading">
                        Centros Consulta
                    </div>
                    <div className='box'>
                        <TableCentroC />
                    </div>
                </div>
            </CentroContextCProvider>
        </Layout>        
     );
}
 
export default CentrosC;