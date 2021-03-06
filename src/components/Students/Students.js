import React, {useEffect, useState} from 'react';
import s from './Students.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";
import {useHttp} from "../../hooks/http.hook";
import CircularProgress from "@mui/material/CircularProgress";


export const Students = ({}) => {
    const {request, error, clearError, loading} = useHttp();
    const [data, setData] = useState([]);

    const addTaskHandler = (data) => {

    }

    const getUsers = async () => {
        try {
            const answer = await request(`/employees/`, 'GET', null);
            setData(answer)
        } catch (e){}
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className={s.root}>
            <div className={s.conatiner_item}>
                {loading ? (<div className={s.fff}><CircularProgress color="secondary" /></div>) : null}
                {data.map((item, index) => (
                    <>
                    <div className={s.item_in}>
                        <div className={s.item_wrapper}>
                            <div className={s.avatar}>
                                <img className={s.img} src={profile_img} />
                            </div>
                            <div className={s.item_label}>
                                {item?.user?.first_name + ' ' + item?.user?.last_name}
                            </div>
                        </div>
                        <div className={s.progress}>
                            {item.experience + ' %'}
                        </div>
                        <ButtonActionDashed label={'Добавить задачу'} callback={addTaskHandler} />
                    </div>
                    <div className={s.liner}>
                        <div className={s.item_hr} />
                    </div>
                    </>
                ))}
            </div>
        </div>
    )
}
