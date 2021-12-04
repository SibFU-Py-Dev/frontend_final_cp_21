import React, {useContext, useEffect, useState} from 'react';
import s from './PopupLoad.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {usePopupForm} from "../../hooks/usePopupForm";
import {TextField, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, InputLabel, FormControl, Button} from "@mui/material";
import { DateTimePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useHttp} from "../../hooks/http.hook";
import lop_img from '../../assets/images/pil.png';
import image_len from "../../assets/images/image_len.png";

export const PopupLoad = ({isOpen, setIsOpen}) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className={s.root}>
            <div
                className={s.button_clouse}
                onClick={() => setIsOpen(false)}
            >
                <GlobalSvgSelector id='clouse' />
            </div>
            <div className={s.box} style={{
                marginTop: '80px',
                height: '10vh',
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '24px'
            }}>{'Появился новый раздел - Адаптивные курсы!'}</div>
            <div className={s.box} style={{height: '70vh'}}>
                {/*<div style={{width: '50%', display: 'flex', flexDirection: 'column', padding: '25px', flexWrap: 'wrap'}}>*/}

                {/*</div>*/}
                {/*<div style={{width: '50%', display: 'flex', flexDirection: 'column', padding: '25px'}}>*/}
                {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}

                {/*    </LocalizationProvider>*/}
                {/*</div>*/}
                <div className={s.prog}>
                    <img className={s.img} src={lop_img} />
                </div>
                <Button onClick={() => {setIsOpen(false)}} variant='outlined' sx={{width: '150px', alignSelf: 'flex-end', margin: '25px', justifySelf:'flex-end'}}>Ок</Button>
            </div>
        </div>
    );
};
