import React from 'react';
import s from './ButtonBlur.module.scss';


export const ButtonNone = ({label, callback, style}) => {
    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <div className={s.button__label}>
                {label}
            </div>
        </div>
    );
};
