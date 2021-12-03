import React, {useEffect, useState} from 'react';
import s from './Employees.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../HintPopup/HintPopup"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashedIconLeft} from "../button/buttonActionDashedIconLeft/ButtonActionDashedIconLeft";
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";


const info = {
    fio: 'Фамилия имя',
    dop_ifo: 'Другая инфа, статус'
}

const menu = [
    "Сотрудники", "Проект", "Редактирование курса", "Текущие задачи",
]

export const Employees = () => {
    const hintSystem = useHintSystem();
    const [data, setData] = useState({
        pupils: [
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
        ],
        mentors: [
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
            {
                name: 'Фамилия имя',
                mentor: 'Фамилия Ментор'
            },
        ]
    });

    const addTaskHandler = (data) => {

    }


    return (
        <div className={s.root}>
            <div className={s.label}>Ученики</div>
            <div className={s.conatiner_item}>
                {data.pupils.map((item, index) => (
                    <>
                    <div className={s.item_in}>
                        <div className={s.item_wrapper}>
                            <div className={s.avatar}>
                                <img className={s.img} src={profile_img} />
                            </div>
                            <div className={s.item_label}>
                                {item.name}
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
                                {item.mentor}
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
                {data.mentors.map((item, index) => (
                    <>
                        <div className={s.item_in}>
                            <div className={s.item_wrapper}>
                                <div className={s.avatar}>
                                    <img className={s.img} src={profile_img} />
                                </div>
                                <div className={s.item_label}>
                                    {item.name}
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
