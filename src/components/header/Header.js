import React, {useState} from 'react';
import s from './Header.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {Button, LinearProgress} from '@mui/material';

export const Header = () => {

    const data = {
        progress: 50,
    }

    return (
        <div className={s.root}>
            <div className={s.container} >
                <div className={s.title}>PASCAL</div>

                <div className={s.wrapper}>
                    <Button sx={{marginRight:'20px'}} variant='outlined'>Адаптационный курс</Button>

                    <div>
                        <LinearProgress value={data.progress} variant='determinate'
                        sx={{height: '18px', width: '250px', marginRight: '20px', borderRadius: '9px'}}/>
                    </div>

                    <div
                        className={s.button_profile}
                    >
                        <GlobalSvgSelector id='profile' />
                    </div>

                    <div
                        className={s.button_notifi}
                    >
                        <GlobalSvgSelector id='notification' />
                    </div>
                </div>
            </div>
        </div>
    );
};
