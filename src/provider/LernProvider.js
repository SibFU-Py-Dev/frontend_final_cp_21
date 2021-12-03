import React, {useState} from "react";
import {LernContext} from '../context/LernContext';

export const LernProvider = ({children, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        console.log('dffffffffffff')
        setIsOpen(true);
    }

    const exitHandler = () => {
        setIsOpen(false);
    }

    return <LernContext.Provider
        value={{
            isOpen,
            openHandler,
            exitHandler,
        }}
        {...props}
    >
        {children}
    </LernContext.Provider>
}
