import {createContext} from "react";

function noop(){}

export const HintSystemContext = createContext({
    statusHint: null,
    dataHint: null,
    changeDataHint: noop,
    nextHint: noop,
});
