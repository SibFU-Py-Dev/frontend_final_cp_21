import React, {useEffect, useState} from 'react';
import s from './Employees.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../HintPopup/HintPopup"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashedIconLeft} from "../button/buttonActionDashedIconLeft/ButtonActionDashedIconLeft";
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";
import {useHttp} from "../../hooks/http.hook";
import CircularProgress from "@mui/material/CircularProgress";


const info = {
    fio: 'Фамилия имя',
    dop_ifo: 'Другая инфа, статус'
}

const menu = [
    "Сотрудники", "Проект", "Редактирование курса", "Текущие задачи",
]

export const Employees = () => {
    const hintSystem = useHintSystem();
    const [data, setData] = useState([]);
    const [dataL, setDataL] = useState([]);

    const {request, error, clearError, loading} = useHttp();

    const getUser = async () => {
        try {
            const answer = await request(`/employees/`, 'GET', null);
            setData(answer);
            const answer_new = await request(`/teachers/`, 'GET', null);
            setDataL(answer_new);
        } catch (e){}
    }

    useEffect(() => {getUser()}, [])

    const addTaskHandler = (data) => {

    }


    return (
        <div className={s.root}>
            <div className={s.label}>Ученики</div>
            <div className={s.conatiner_item}>
                {loading ? (<div className={s.fff}><CircularProgress color="secondary" /></div>) : null}
                {data?.map((item, index) => (
                    <>
                    <div className={s.item_in}>
                        <div className={s.item_wrapper}>
                            <div className={s.avatar}>
                                <img className={s.img} src={profile_img} />
                            </div>
                            <div className={s.item_label}>
                                {item.user.first_name + ' ' + item.user.last_name}
                            </div>
                        </div>
                        <div className={s.progress}>
                            Прогресс
                        </div>
                        <div className={s.item_wrapper_mentor}>
                            {/*<div className={s.item_label_mentor}>*/}
                            {/*    Наставник:*/}
                            {/*</div>*/}
                            <div className={s.avatar_mentor}>
                                <img className={s.img} src={profile_img} />
                            </div>
                            <div className={s.item_value_mentor}>
                                Loplov Vlotop
                            </div>
                        </div>
                        <ButtonActionDashed label={'Добавить задачу'} callback={addTaskHandler} />
                    </div>
                    <div className={s.liner}>
                        <div className={s.item_hr} />
                    </div>
                    </>
                ))}
            </div>

            <div className={s.label}>Наставники</div>
            <div className={s.conatiner_item}>
                {loading ? (<div className={s.fff}><CircularProgress color="secondary" /></div>) : null}
                {dataL?.map((item, index) => (
                    <>
                        <div className={s.item_in}>
                            <div className={s.item_wrapper}>
                                <div className={s.avatar}>
                                    <img className={s.img} src={profile_img} />
                                </div>
                                <div className={s.item_label}>
                                    {item.user.first_name + ' ' + item.user.last_name}
                                </div>
                            </div>
                            <div className={s.progress}>

                            </div>
                            {/*<div className={s.item_wrapper_mentor}>*/}
                            {/*    /!*<div className={s.item_label_mentor}>*!/*/}
                            {/*    /!*    Наставник:*!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*    <div className={s.avatar_mentor}>*/}
                            {/*        <img className={s.img} src={profile_img} />*/}
                            {/*    </div>*/}
                            {/*    <div className={s.item_value_mentor}>*/}
                            {/*        {item.mentor}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <ButtonActionDashed label={'Добавить задачу'} callback={addTaskHandler} />
                        </div>
                        <div className={s.liner}>
                            <div className={s.item_hr} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};
