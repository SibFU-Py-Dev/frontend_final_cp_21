import React from 'react';
import s from './ButtonSmallIcon.module.scss';
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


export const ButtonSmallIcon = ({callback, icon, style}) => {

    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <GlobalSvgSelector id={icon} />
        </div >
    );
};
