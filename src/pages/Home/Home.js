import React, {useContext, useState} from 'react';
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
    const lern = useLern();
    const [data, setData] = useState(info);
    const [menuStatus, setMenuStatus] = useState(home[0]);

    const itemMenuHandler = (item) => {
        setMenuStatus(item);
    }


    return (
        <>
        <div className={s.root}>
            <div className={s.profile}>
                <div
                    className={s.button_set}
                    onClick={() => {lern.openHandler(); console.log('444444444444')}}
                >
                    Адаптивный курс
                </div>
                <div className={s.body_profile}>
                    <div className={s.wrapper}>
                        <div className={s.avatar}>
                            <img className={s.img} src={profile_img} />
                        </div>
                        <div className={s.info}>
                            <div className={s.text_fio}>{data.fio}</div>
                            <div className={s.text_dop}>{data.dop_ifo}</div>

                        </div>
                    </div>
                    <div className={s.block}>
                        <div
                            className={s.button_setting}
                        >
                            <GlobalSvgSelector id='setting' />
                        </div>
                    </div>
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
