import React, {useState, useEffect} from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './HintPopup.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";


export const HintPopup = ({index}) => {
    const hintSystem = useHintSystem();


    // if (index !== hintSystem.statusHint) {
    //     console.log('auuuu-', hintSystem.statusHint, index)
    //     return null;
    // }

    return (
        <div className={index !== hintSystem.statusHint ? s.popup : s.popup_active}>
            <div className={s.wrapper}>
                <div className={s.label}>
                    {hintSystem?.dataHint ? hintSystem.dataHint[hintSystem.statusHint ? (hintSystem.statusHint - 1) : 0].label : null}
                </div>
                <div className={s.text}>
                    {hintSystem?.dataHint ? hintSystem?.dataHint[hintSystem.statusHint ? (hintSystem.statusHint - 1) : 0].text : null}
                </div>
                <div
                    className={s.button}
                    onClick={() => hintSystem.nextHint()}
                >
                    <GlobalSvgSelector id='arrow_right' />
                </div>
            </div>
        </div>
    );
};
