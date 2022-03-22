import React from 'react';
import Layout from '../components/commons/Layout';
import Login from './Login';

const Home = () => {

    console.log('entra en Home');

    return (
        <>
            <Login/>
            <p>Usuario: OSCAR</p>
            <Layout>

                <p>Home</p>
            </Layout>
        </>
    );

}


export default Home;
