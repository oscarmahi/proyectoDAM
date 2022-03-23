import React, { createContext, useState } from 'react';

export const SesionContext = createContext();

export const SesionContextProvider = props => {

    const [sesion, setSesion] = useState('');

    return (
        <SesionContext.Provider
            value = {{
                sesion,
                setSesion
            }}
        >
            {props.children}
        </SesionContext.Provider>

    )
}