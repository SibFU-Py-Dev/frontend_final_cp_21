import React from 'react';
import s from './ButtonSmallBlurIcon.module.scss';
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


export const ButtonSmallBlurIcon = ({callback, icon, style}) => {

    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <GlobalSvgSelector id={icon} />
        </div >
    );
};
