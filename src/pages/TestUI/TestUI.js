import React, {useEffect, useState} from 'react';
import s from './TestUI.module.scss';
import {ButtonBlur} from "../../components/button/buttonBlur/ButtonBlur";
import {ButtonBorder} from "../../components/button/buttonBorder/ButtonBorder";
import {ButtonNone} from "../../components/button/buttonNone/ButtonNone";
import {ButtonIcon} from "../../components/button/buttonIcon/ButtonIcon";
import { Alert } from '../../components/alert/Alert';


export const TestUI = () => {

    const buttonHandler = () => {
        console.log('click - button')
    }

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ButtonBlur label={'Кнопка'} callback={buttonHandler} style={s.margin_right} />

                <ButtonBorder label={'Кнопка'} callback={buttonHandler} style={s.margin_right} />

                <ButtonNone label={'Кнопка'} callback={buttonHandler} style={s.margin_right} />

                <ButtonIcon label={'Кнопка'} callback={buttonHandler} style={s.margin_right} />
                
                
            </div>
                <Alert color='red' text='text example'></Alert>

                <Alert color='yellow' text='text example'></Alert>

                <Alert color='green' text='text example'></Alert>

                <Alert color='blue' text='text example'></Alert>
            <div className={s.wrapper}>

            </div>
        </div>
    );
};
