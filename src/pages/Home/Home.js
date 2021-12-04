import React, {useContext, useEffect, useState} from 'react';
import s from './Home.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import profile_img from '../../assets/images/profile.png';
import {Employees} from "../../components/Employees/Employees";
import {Project} from "../../components/Project/Project";
import { Students } from '../../components/Students/Students';
import { Tasks } from '../../components/Tasks/Tasks';
import {LernContext} from "../../context/LernContext";
import {useLern} from "../../hooks/useLern";
import {useHttp} from "../../hooks/http.hook";
import CircularProgress from "@mui/material/CircularProgress";

const info = {
    fio: 'Фамилия имя',
    dop_ifo: 'Другая инфа, статус'
}

const home = [
    {
        component: <Employees />,
        label: "Сотрудники",
    },
    {
        component: <Students />,
        label: "Ученики",
    },
    {
        component: <Tasks />,
        label: "Задачи",
    },
    {
        component: <Project />,
        label: "Проект",
    },
]

export const Home = () => {
    const [data, setData] = useState(info);
    const [menuStatus, setMenuStatus] = useState(home[0]);
    const {request, error, clearError, loading} = useHttp();

    const itemMenuHandler = (item) => {
        setMenuStatus(item);
    }

    const getUser = async () => {
        try {
            const answer = await request(`/auth/users/me/`, 'GET', null);
            setData(answer)
        } catch (e){}
    }

    useEffect(() => {getUser()}, []);

    return (
        <>
        <div className={s.root}>
            <div className={s.profile}>
                <div className={s.body_profile}>
                        <>
                            <div className={s.wrapper}>
                                <div className={s.avatar}>
                                    <img className={s.img} src={profile_img} />
                                </div>
                                <div className={s.info}>
                                    <div className={s.text_fio}>{data.first_name + ' ' + data.last_name}</div>
                                    <div className={s.text_dop}>{data.email}</div>

                                </div>
                            </div>
                            <div className={s.block}>
                                <div
                                    className={s.button_setting}
                                >
                                    <GlobalSvgSelector id='setting' />
                                </div>
                            </div>
                        </>


                </div>

                <div className={s.menu}>
                    {home.map((item, index) => (
                        <div
                            className={s.item_menu}
                            onClick={() => itemMenuHandler(item)}
                        >
                            <div className={item === menuStatus ? s.item_label_active : s.item_label}>{item.label}</div>
                            <div className={item === menuStatus ? s.hr_active : s.hr}/>
                        </div >
                    ))}
                </div>
            </div>
        </div>

            {menuStatus.component}
        </>
    );
};
