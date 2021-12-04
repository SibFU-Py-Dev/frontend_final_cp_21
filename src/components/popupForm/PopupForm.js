import React, {useContext, useEffect, useState} from 'react';
import s from './PopupForm.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {usePopupForm} from "../../hooks/usePopupForm";
import {TextField, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, InputLabel, FormControl, Button} from "@mui/material";
import { DateTimePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useHttp} from "../../hooks/http.hook";


export const PopupForm = () => {
    const rootPopup = usePopupForm();
    // const data = [
    //     {
    //         name: 'Фамилия Имя Отчество'
    //     },
    //     {
    //         name: 'Фамилия Имя Отчество 2'
    //     },
    //     {
    //         name: 'Фамилия Имя Отчество 3'
    //     },
    //     {
    //         name: 'Фамилия Имя Отчество 4'
    //     },
    // ]
    const [form, setForm] = useState({

    });
    const {request, error, clearError, loading} = useHttp();

    const sendTask = async () => {
        try {
            const answer = await request(`/task/`, 'POST', form);
            console.log('6666-', answer);
            rootPopup.exitHandler();
        } catch (e){
            console.log('77777-', e);
            rootPopup.exitHandler();
        }
    }

    if (!rootPopup.isOpen) {
        return null;
    }

    return (
        <div className={s.root}>
            <div
                className={s.button_clouse}
                onClick={() => rootPopup.exitHandler()}
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
            }}>Добавить задачу</div>
            <div className={s.box} style={{height: '70vh'}}>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', padding: '25px', flexWrap: 'wrap'}}>
                    <TextField
                        nChange={(value) => setForm({...form, title: value.target.value})}
                        label='Название задачи' variant='outlined' size='small' sx={{
                        width: '300px',
                        marginBottom: '20px'
                    }}></TextField>
                    <TextField
                        nChange={(value) => setForm({...form, description: value.target.value})}
                        label='Описание задачи' variant='outlined' size='small' multiline  minRows={4} maxRows={4} sx={{
                        width: '100%',
                        marginBottom: '20px'
                    }}></TextField>
                    <FormControl>
                        <InputLabel id="labelId1">Исполнитель</InputLabel>
                        <Select onChange={(value) => setForm({...form, user: rootPopup?.data[value.target.value].id})} labelId="labelId1" size='small' label='Исполнитель' sx={{marginBottom: '20px'}}>
                            {rootPopup?.data?.map((item, index) => {
                                return (<MenuItem value={index}>{item.user.first_name + ' ' + item.user.last_name}</MenuItem>);
                            })}
                        </Select>
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Требуется проверка наставником" />
                    </FormGroup>
                </div>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', padding: '25px'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} size='small'  sx={{marginBottom: '20px'}}/>}
                            onChange={(value) => setForm({...form, last_login: value})} label='Начало задачи'
                        >
                        </DateTimePicker>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} size='small' sx={{marginBottom: '20px'}} />}
                            onChange={(value) => setForm({...form, perfect_deadline: value})} label='Perfect deadline'
                        >
                        </DateTimePicker>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} size='small' sx={{marginBottom: '20px'}}/>}
                            onChange={(value) => setForm({...form, deadline: value})}  label='Deadline'
                        >
                        </DateTimePicker>
                        <TextField
                            onChange={(value) => setForm({...form, experience: value.target.value})}
                            label='Награда' variant='outlined' size='small' sx={{
                            width: '150px',
                            marginBottom: '20px'
                        }}></TextField>
                    </LocalizationProvider>
                </div>
                <Button onClick={() => sendTask()} variant='outlined' sx={{width: '150px', alignSelf: 'flex-end', margin: '25px', justifySelf:'flex-end'}}>Ок</Button>
            </div>
        </div>
    );
};
