import React, {useState} from 'react';
import s from './ButtonBlur.module.scss';


export const ButtonBlur = ({label, callback, style, style_label}) => {

    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>
        </div >
    );
};
