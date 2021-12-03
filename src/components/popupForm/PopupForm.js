import React, {useContext, useEffect, useState} from 'react';
import s from './PopupForm.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {usePopupForm} from "../../hooks/usePopupForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const PopupForm = () => {
    const popupFormRoot = usePopupForm();
    const [form, setForm] = useState({

    });
    const sendHandler = async () => {
        // Создаем задачу
    }

    return (
        <>
        <div className={s.blur}/>
        <div className={s.root}>
            <div className={s.title}>Создание новой задачи</div>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={6}
                defaultValue="Default Value"
                sx={{width: '100%'}}
            />
            <Button className={s.button_send} sx={{width: '100%'}} onClick={() => sendHandler()} variant="contained">Добавить задачу</Button>
        </div>
        </>
    );
};
