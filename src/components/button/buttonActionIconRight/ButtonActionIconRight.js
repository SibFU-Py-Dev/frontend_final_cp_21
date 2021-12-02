import React from 'react';
import s from './ButtonActionIconRight.module.scss';
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


export const ButtonActionIconRight = ({label, callback, icon, style, style_label}) => {
    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>
            <GlobalSvgSelector id={icon} />
        </div>
    );
};
