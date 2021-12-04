import React, {useEffect, useState} from 'react';
import s from './TestUIKov.module.scss';
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


export const TestUIKov = () => {

    const buttonHandler = () => {
    }

    return (
        <div className={s.home}>
            <div className={s.wrapper}>

            </div>
        </div>
    );
};
