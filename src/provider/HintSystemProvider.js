import React, {useState} from "react";
import {HintSystemContext} from '../context/HintSystemContext';

export const HintSystemProvider = ({children, ...props}) => {
    const [statusHint, setStatusHint] = useState(null);
    const [dataHint, setDataHint] = useState(null);

    const changeDataHint = (data) => {
        setDataHint(data);
    }

    const nextHint = () => {
        if (!statusHint) {
            return setStatusHint(1);
        }
        if (statusHint >= dataHint?.length) {
            return setStatusHint(null);
        }
        setStatusHint(statusHint + 1);
    }

    return <HintSystemContext.Provider
        value={{
            statusHint,
            dataHint,
            changeDataHint,
            nextHint
        }}
        {...props}
    >
        {children}
    </HintSystemContext.Provider>
}
