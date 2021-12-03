import React, {useContext, useState} from 'react';
import s from './Auth.module.scss';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/authContext";



export const Auth = () => {
    const auth = useContext(AuthContext);
    const {request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        login: '',
        password: '',
    });
    const [errorForm, setErrorForm] = useState({
        login: null,
        password: null,
    });

    const authHandler = async () => {
        if (form.login.length === 0) {
            return setErrorForm({
                login: 'Не введен Login',
                password: null,
            });
        }
        if (form.password.length === 0) {
            return setErrorForm({
                login: null,
                password: 'Не введен Password',
            });
        }
        setErrorForm({
            login: null,
            password: null,
        });
        try {
            const answer = await request('/auth/jwt/create/', 'POST', {username: form.login, password: form.password});
            auth.login(answer.access, answer.refresh);
            // auth.login('dfgd', 'dfsdfdsf');
        } catch (e){
            return setErrorForm({
                login: 'Не верный Login или Password',
                password: 'Не верный Login или Password',
            });
        }
    }

    const changeText = (value, field) => {
        setErrorForm({...errorForm, [field]: null});
        setForm({...form, [field]: value});
    }


    return (
        <div className={s.root}>
            <div className={s.label}>Добро пожаловать!</div>

            <TextField
                sx={{width: '100%'}}
                className={s.input}
                error={errorForm.login}
                id="outlined-error-helper-text"
                label="Login"
                value={form.login}
                helperText={errorForm.login}
                onChange={(value) => changeText(value.target.value, 'login')}
            />
            <TextField
                sx={{width: '100%'}}
                className={s.input}
                error={errorForm.password}
                id="outlined-error-helper-text"
                label="Password"
                value={form.password}
                helperText={errorForm.password}
                onChange={(value) => changeText(value.target.value, 'password')}
            />
            <div className={s.wrapper}>
                <Checkbox sx={s.checkbox}/>
                <div className={s.text}>Чужой компьютер</div>
            </div>

            <Button className={s.button_auth} sx={{width: '100%'}} onClick={() => authHandler()} variant="contained">Авторизоваться</Button>

            <div className={s.button_text}>Не помню пароль или логин</div>

            <div className={s.button_text}>Правила безопасности</div>
        </div>
    );
};
