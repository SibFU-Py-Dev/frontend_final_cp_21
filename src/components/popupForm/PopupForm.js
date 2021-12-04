import React, {useContext, useEffect, useState} from 'react';
import s from './PopupForm.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {usePopupForm} from "../../hooks/usePopupForm";
import {TextField, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, InputLabel, FormControl, Button} from "@mui/material";
import { DateTimePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export const PopupForm = (props) => {
    const data = [
        {
            name: 'Фамилия Имя Отчество'
        },
        {
            name: 'Фамилия Имя Отчество 2'
        },
        {
            name: 'Фамилия Имя Отчество 3'
        },
        {
            name: 'Фамилия Имя Отчество 4'
        },
    ]
    
    return (
        <div className={s.root}>
            <div
                className={s.button_clouse}
                onClick={() => {}}
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
                    <TextField label='Название задачи' variant='outlined' size='small' sx={{
                        width: '300px',
                        marginBottom: '20px'
                    }}></TextField>
                    <TextField label='Описание задачи' variant='outlined' size='small' multiline  minRows={4} maxRows={4} sx={{
                        width: '100%',
                        marginBottom: '20px'
                    }}></TextField>
                    <FormControl>
                        <InputLabel id="labelId1">Исполнитель</InputLabel>
                        <Select labelId="labelId1" size='small' label='Исполнитель' sx={{marginBottom: '20px'}}>
                            {data.map((item, index) => {
                                return (<MenuItem value={index}>{item.name}</MenuItem>);
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
                            onChange={(value) => console.log(value)} label='Начало задачи'
                        >
                        </DateTimePicker>
                        <DateTimePicker 
                            renderInput={(props) => <TextField {...props} size='small' sx={{marginBottom: '20px'}} />}
                            onChange={(value) => console.log(value)} label='Perfect deadline'
                        >
                        </DateTimePicker>
                        <DateTimePicker 
                            renderInput={(props) => <TextField {...props} size='small' sx={{marginBottom: '20px'}}/>}
                            onChange={(value) => console.log(value)} label='Deadline'
                        >
                        </DateTimePicker>
                        <TextField label='Награда' variant='outlined' size='small' sx={{
                            width: '150px',
                            marginBottom: '20px'
                        }}></TextField>
                    </LocalizationProvider>
                </div>
                <Button variant='outlined' sx={{width: '150px', alignSelf: 'flex-end', margin: '25px', justifySelf:'flex-end'}}>Ок</Button>
            </div>
        </div>
    );
};
