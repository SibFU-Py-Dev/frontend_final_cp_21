import React, {useState} from 'react';
import s from './ButtonLoock.module.scss';
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


export const ButtonLoock = ({label, callback, icon, style, style_label}) => {

    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <GlobalSvgSelector id={icon} />
            <div className={s.button__label + ' ' + style_label + (icon ? (' ' + s.margin) : '')}>
                {label}
            </div>
        </div >
    );
};
