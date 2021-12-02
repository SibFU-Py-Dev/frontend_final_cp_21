import React from 'react';
import s from './ButtonNone.module.scss';


export const ButtonNone = ({label, callback, style, style_label}) => {
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
