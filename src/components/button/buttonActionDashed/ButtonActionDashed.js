import React from 'react';
import s from './buttonActionDashed.module.scss';


export const ButtonActionDashed = ({label, callback, style, style_label}) => {
    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>
        </div>
    );
};
