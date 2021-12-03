import React, {useEffect, useState} from 'react';
import s from './Students.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";


export const Students = ({}) => {
    const [data, setData] = useState({
        students: [
            {
                fullname: 'Имечко фамилия',
                progress: 56,
            },
            {
                fullname: 'Имечко фамилия',
                progress: 56,
            },
            {
                fullname: 'Имечко фамилия',
                progress: 56,
            },
            {
                fullname: 'Имечко фамилия',
                progress: 56,
            }
        ]
    });

    const addTaskHandler = (data) => {

    }

    return (
        <div className={s.root}>
            <div className={s.conatiner_item}>
                {data.students.map((item, index) => (
                    <>
                    <div className={s.item_in}>
                        <div className={s.item_wrapper}>
                            <div className={s.avatar}>
                                <img className={s.img} src={profile_img} />
                            </div>
                            <div className={s.item_label}>
                                {item.fullname}
                            </div>
                        </div>
                        <div className={s.progress}>
                            {item.progress + ' %'}
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