import React, {useState} from 'react';
import s from './ButtonBlur.module.scss';


export const ButtonBlur = ({label, callback, style, style_label}) => {
    const [status, setStatus] = useState(false);

    return (
        <button
            className={s.button + ' ' + style}
            disabled={status}
            onClick={() => {callback(); setStatus(true)}}
        >
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>
        </button >
    );
};
