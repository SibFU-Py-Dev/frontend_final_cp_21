import React, {useState} from 'react';
import s from './ButtonIcon.module.scss';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';


export const ButtonIcon = ({label, callback, style, style_label}) => {

    return (
        <div
            className={s.button + ' ' + style}
            onClick={() => callback()}
        >
            <div className={s.button__label + ' ' + style_label}>
                {label}
            </div>

            <GlobalSvgSelector id='icon_button' />
        </div >
    );
};
