import React, {useEffect, useState} from 'react';
import s from './TestHint.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../../components/HintPopup/HintPopup"


const dataHint = [
    {
        label: 'Подсказка - 1',
        text: 'Очень умная подсказка...'
    },
    {
        label: 'Подсказка - 2',
        text: 'Очень умная подсказка...'
    },
    {
        label: 'Подсказка - 3',
        text: 'Очень умная подсказка...'
    },
]

export const TestHint = () => {
    const hintSystem = useHintSystem();

    useEffect(() => {
        hintSystem.changeDataHint(dataHint);
    }, []);

    const startHintHandler = () => {
        hintSystem.nextHint();
    }

    return (
        <>
        {hintSystem.statusHint ? (
            <div className={s.blur} />
        ) : null}

        <div className={s.home}>
            <div className={s.wrapper}>
                <div
                    className={s.button + ((hintSystem.statusHint === 1) ? (' ' + s.hint_active) : '')}
                    onClick={(e) => {if(e.currentTarget.name == 'button')console.log('buttonBlur click-1')}}
                    name='button'
                >
                    Кнопка - 1
                    <HintPopup index={1} />
                </div>
                <div
                    className={s.button + ((hintSystem.statusHint === 2) ? (' ' + s.hint_active) : '')}
                    onClick={(e) => {if(e.currentTarget.name == 'button')console.log('buttonBlur click-2')}}
                    name='button'
                >
                    Кнопка - 2
                    <HintPopup index={2} />
                </div>
                <div
                    className={s.button + ((hintSystem.statusHint === 3) ? (' ' + s.hint_active) : '')}
                    onClick={(e) => {if(e.currentTarget.name == 'button')console.log('buttonBlur click-3')}}
                    name='button'
                >
                    Кнопка - 3
                    <HintPopup index={3} />
                </div>
            </div>

            <div className={s.wrapper}>
                <div
                    className={s.button}
                    onClick={() => startHintHandler()}
                >
                    Запустить систему подсказок )))
                </div>
            </div>
        </div>
        </>
    );
};
