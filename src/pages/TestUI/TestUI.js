import React, {useEffect, useState} from 'react';
import s from './TestUI.module.scss';
import {ButtonBlur} from "../../components/button/buttonBlur/ButtonBlur";
import {ButtonBorder} from "../../components/button/buttonBorder/ButtonBorder";
import {ButtonNone} from "../../components/button/buttonNone/ButtonNone";
import {ButtonIcon} from "../../components/button/buttonIcon/ButtonIcon";
import { Alert } from '../../components/alert/Alert';
import {ButtonAction} from "../../components/button/buttonAction/ButtonAction";
import {ButtonActionIconLeft} from "../../components/button/buttonActionIconLeft/ButtonActionIconLeft";
import {ButtonActionIconRight} from "../../components/button/buttonActionIconRight/ButtonActionIconRight";
import {ButtonActionDashed} from "../../components/button/buttonActionDashed/ButtonActionDashed";
import {ButtonActionDashedIconLeft} from "../../components/button/buttonActionDashedIconLeft/ButtonActionDashedIconLeft";
import {ButtonLoock} from "../../components/button/buttonLoock/ButtonLoock";
import {ButtonSmallIcon} from "../../components/button/buttonSmallIcon/ButtonSmallIcon";
import {ButtonSmallBlurIcon} from "../../components/button/buttonSmallBlurIcon/ButtonSmallBlurIcon";
import {Accordion} from "../../components/accordion/Accordion";


export const TestUI = () => {

    const buttonHandler = () => {
        console.log('click - button')
    }

    const ValueAccordion = (
        <>
        <div className={s.text_blu}>
            Буравлева Наталья Сергеевна / Горлова Наталья Михайловна
        </div>

        <div className={s.text}>
            ОО «Алтайский» — Андрюкова Елена Юрьевна
        </div>

        <div className={s.text}>
            ОО «Бурятский» — Отнюкова Инна Валерьевна
        </div>
        </>
    )

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ButtonBlur label={'ButtonBlur'} callback={buttonHandler} style={s.margin_right} />

                <ButtonBorder label={'ButtonBorder'} callback={buttonHandler} style={s.margin_right} />

                <ButtonNone label={'ButtonNone'} callback={buttonHandler} style={s.margin_right} />

                <ButtonIcon label={'Кнопка'} callback={buttonHandler} style={s.margin_right} />
                
                
                <ButtonIcon label={'ButtonIcon'} callback={buttonHandler} icon={'icon_button'} style={s.margin_right} />
            </div>
                <Alert color='red' text='text example'></Alert>

                <Alert color='yellow' text='text example'></Alert>

                <Alert color='green' text='text example'></Alert>

                <Alert color='blue' text='text example'></Alert>
            <div className={s.wrapper}>
                <ButtonAction label={'ButtonAction'} callback={buttonHandler} style={s.margin_right} />

                <ButtonActionIconLeft label={'ButtonActionIconLeft'} callback={buttonHandler} icon={'action_plus'} style={s.margin_right} />

                <ButtonActionIconRight label={'ButtonActionIconRight'} callback={buttonHandler} icon={'action_icon_button'} style={s.margin_right} />

                <ButtonActionDashed label={'ButtonActionDashed'} callback={buttonHandler} style={s.margin_right} />

                <ButtonActionDashedIconLeft label={'ButtonActionDashedIconLeft'} callback={buttonHandler} icon={'action_plus'} style={s.margin_right} />
            </div>



            <div className={s.wrapper}>
                <ButtonLoock label={'ButtonLoock'} callback={buttonHandler} style={s.margin_right} />

                <ButtonLoock label={'ButtonLoock'} callback={buttonHandler} icon={'action_icon_button'} style={s.margin_right} />

                <ButtonSmallIcon callback={buttonHandler} icon={'setting'} style={s.margin_right} />

                <ButtonSmallBlurIcon callback={buttonHandler} icon={'message'} style={s.margin_right} />
            </div>
            <div className={s.wrapper_new}>
                <Accordion label={'Accordion'} vallue={ValueAccordion}/>
            </div>
        </div>
    );
};
