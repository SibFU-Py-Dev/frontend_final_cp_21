import React from 'react';
import s from './ButtonActionIconLeft.module.scss';
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


export const ButtonActionIconLeft = ({label, callback, icon, style, style_label}) => {
    return (
        <div
            className={style + ' ' + s.button + ' ' + style}
            onClick={() => callback()}
        >
            <GlobalSvgSelector id={icon} />
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>
        </div>
    );
};
