import {createContext} from "react";

function noop(){}

export const LernContext = createContext({
    isOpen: null,
    openHandler: noop,
    exitHandler: noop,
});
