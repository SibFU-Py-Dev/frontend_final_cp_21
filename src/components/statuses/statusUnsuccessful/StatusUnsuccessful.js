import React, {useState} from 'react';
import s from './StatusUnsuccessful.module.scss';


export const StatusUnsuccessful = ({value, style, style_label}) => {

    return (
        <div
            className={s.root + ' ' + style}
        >
            <div className={s.crcl} />
            <div className={s.label + ' ' + style_label}>
                {value}
            </div>
        </div >
    );
};
