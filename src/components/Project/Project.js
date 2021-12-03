import React, {useEffect, useState} from 'react';
import s from './Project.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../HintPopup/HintPopup"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashedIconLeft} from "../button/buttonActionDashedIconLeft/ButtonActionDashedIconLeft";
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";
import {Accordion} from "../accordion/Accordion";
import {useHttp} from "../../hooks/http.hook";
import CircularProgress from "@mui/material/CircularProgress";
import img_proj from '../../assets/images/img_proj.png';


const data_project = {

    users: [],
    theme: [
        {
            label: 'Раздел - 1',
            value: [
                {
                    label: 'dfg sdgf dsg fdsgdfs g',
                    value: 'текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст '
                },
                {
                    label: ' gsdgdsgdfs dsf',
                    value: 'текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст '
                },
            ]
        },
        {
            label: 'Тема - 2',
            value: [
                {
                    label: 'sadfasdfas',
                    value: 'текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст '
                },
                {
                    label: 'dafsdaf',
                    value: 'текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст ' +
                        'текст текст текст текст текст текст текст текст текст '
                },
            ]
        },
    ]
}

const project_about = {

}

const menu = [
    "Сотрудники", "Проект", "Редактирование курса", "Текущие задачи",
]

export const Project = () => {
    const hintSystem = useHintSystem();
    const [data, setData] = useState(null);
    const [activeTheme, setActiveTheme] = useState(project_about);
    const {request, error, clearError, loading} = useHttp();

    const getUser = async () => {
        try {
            const answer = await request(`/projects/`, 'GET', null);
            console.log('answer-users-', answer)
            setData(answer[0])
        } catch (e){}
    }

    useEffect(() => {getUser()}, [])

    const addThemeHandler = () => {

    }

    const addChapterHandler = (data) => {

    }

    const themeHandler = (item) => {
        setActiveTheme(item);
    }

    const TextValue = (text) => (
        <div className={s.text}>{text}</div>
    )

    return (
        <div className={s.root}>
            <div className={s.menu_left}>
                <div className={s.menu_left_label}>Название проекта</div>

                <div className={s.container_menu}>
                    <div
                        className={activeTheme === project_about ? s.button_theme_active  : s.button_theme}
                        onClick={() => themeHandler(project_about)}
                    >
                        <div className={activeTheme === project_about ? s.wr : s.def} />
                        О Проекте
                    </div>
                    {data?.theme?.map((item, index) => (
                        <div
                            className={activeTheme === item ? s.button_theme_active  : s.button_theme}
                            onClick={() => themeHandler(item)}
                        >
                            <div className={activeTheme === item ? s.wr : s.def} />
                            {item.label}
                        </div>
                    ))}
                    <div className={s.prog}>
                        <img className={s.img} src={img_proj} />
                    </div>
                </div>
            </div>

            <div className={s.conatiner_project}>
                {loading ? (<div className={s.fff}><CircularProgress color="secondary" /></div>) : null}
                <div className={s.project_label}>{activeTheme?.label}</div>
                <div className={s.title}>{data?.title}</div>
                <div className={s.result_info}>{data?.result_info}</div>
                <div className={s.purpose}>{data?.purpose}</div>
                <div className={s.issue}>{data?.issue}</div>
                <div className={s.managment_info}>{data?.managment_info}</div>
                <div className={s.calendar_info}>{data?.calendar_info}</div>
                {/*{activeTheme?.value?.map((item, index) => (*/}
                {/*    <Accordion label={item.label} vallue={TextValue(item.value)} style={s.accordion}/>*/}
                {/*))}*/}
            </div>

            <div className={s.conatiner_users}>
                {/*{data?.users?.map((item, index) => (*/}
                {/*    <div*/}
                {/*        className={s.item_user}*/}
                {/*    >*/}
                {/*        <div className={s.name_user}>{item.name}</div>*/}
                {/*        <div className={s.info_user}>{item.info}</div>*/}
                {/*    </div>*/}
                {/*))}*/}

            </div>
        </div>
    );
};
