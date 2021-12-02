import {useContext} from "react";
import {HintSystemContext} from "../context/HintSystemContext";

export const useHintSystem = () => useContext(HintSystemContext);
