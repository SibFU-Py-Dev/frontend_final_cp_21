import {useContext} from "react";
import {LernContext} from "../context/LernContext";

export const useLern = () => useContext(LernContext);
