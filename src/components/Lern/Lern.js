import React, {useContext, useEffect, useState} from 'react';
import s from './Lern.module.scss';
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../HintPopup/HintPopup"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import profile_img from '../../assets/images/profile.png'
import {ButtonActionDashedIconLeft} from "../button/buttonActionDashedIconLeft/ButtonActionDashedIconLeft";
import {ButtonActionDashed} from "../button/buttonActionDashed/ButtonActionDashed";
import {Accordion} from "../accordion/Accordion";
import {LernContext} from "../../context/LernContext";
import ScrollArea from "react-scrollbar";
import {ButtonBorder} from "../button/buttonBorder/ButtonBorder";
import {useLern} from "../../hooks/useLern";
import {useHttp} from "../../hooks/http.hook";
import YouTube from "react-youtube";


const data = [
    {
        label: 'Первый',
        id: 1,
    },
    {
        label: 'Второй',
        id: 2,
    },
    {
        label: 'Третий',
        id: 3,
    },
    {
        label: 'Четвертый',
        id: 4,
    },
    {
        label: 'Пятый',
        id: 5,
    },
    {
        label: 'Первый',
        id: 1,
    },
    {
        label: 'Второй',
        id: 2,
    },
    {
        label: 'Третий',
        id: 3,
    },
    {
        label: 'Четвертый',
        id: 4,
    },
    {
        label: 'Пятый',
        id: 5,
    },
    {
        label: 'Первый',
        id: 1,
    },
    {
        label: 'Второй',
        id: 2,
    },
    {
        label: 'Третий',
        id: 3,
    },
    {
        label: 'Четвертый',
        id: 4,
    },
    {
        label: 'Пятый',
        id: 5,
    },
];

const itemData = {
    id: 3,
    title: 'sgfdsg',
    description: 'sadfsadf dfd safdsaf dsafdsaf sdaf',
    url: 'https://vk.com/koleznev96',
    next: 4,
    prev: 2,
}

export const Lern = () => {
    const lernRoot = useLern();
    const [well, setWell] = useState(data);
    // const [wellSubsequent, setWellSubsequent] = useState(data);
    const [itemWell, setItemWell] = useState(itemData);
    const {request, error, clearError} = useHttp();
    const [itemMen, setItemMen] = useState(true);

    const getData = async () => {
        // Получаем список всех элементов курса
        // Получаем текущий элемент курса
        try {
            const answer = await request('/articles/', 'GET', null);
            console.log('answer-', answer)
            setWell(answer)
            const data = await request('/articles/3/', 'GET', null);
            console.log('data-', data)
            setItemWell(data)
        } catch (e){}
    }

    useState(() => {
        getData();
    }, []);

    const getNewItemWell = async (id) => {
        // Получаем элемент курса по id
        try {
            const answer = await request(`/articles/${id}/`, 'GET', null);
            setItemWell(answer)
        } catch (e){}
    }

    const nextHandler = () => {
        // Получаем слудйющий элемент курса
        getNewItemWell(itemWell.next_id);
    }

    const prevHandler = () => {
        // Получаем прошлый элемент курса
        getNewItemWell(itemWell.prev_id);
    }

    return (
        <div className={lernRoot.isOpen ? s.root : s.def}>
            <div
                className={s.button_clouse}
                onClick={() => lernRoot.exitHandler()}
            >
                <GlobalSvgSelector id='clouse' />
            </div>
            <ScrollArea className={s.menu}>
                {well?.map((item, index) => (
                    <div className={s.menu_item}>
                        <div className={item?.id < itemWell?.id ? s.lin_active : s.lin} />

                        <div
                            className={item?.id < itemWell?.id ? s.label_active : s.label}
                            onClick={() => getNewItemWell(item.id)}
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </ScrollArea>

            <div className={s.body}>
                <div className={s.block_body}>
                    <div className={s.liner_wr}>
                        <div
                            className={s.button_men}
                            onClick={() => setItemMen(true)}
                        >
                            <div className={itemMen ? s.label_men_active : s.label_men}>Контент</div>
                            <div className={itemMen ? s.hr_Active : s.hr} />
                        </div>
                        <div
                            className={s.button_men}
                            onClick={() => setItemMen(false)}
                        >
                            <div className={!itemMen ? s.label_men_active : s.label_men}>Видео</div>
                            <div className={!itemMen ? s.hr_Active : s.hr} />
                        </div>
                    </div>
                    {itemMen ? (
                        <>
                        <div className={s.title}>{itemWell?.title}</div>
                        <div className={s.url}>{itemWell?.resource_link}</div>
                        <div className={s.description}>{itemWell?.content}</div>
                        </>
                    ) : (
                        <YouTube videoId={itemWell?.video_link} opts={{width: '100%'}} />
                    )}


                    {/*<div className={s.cont_urls}>*/}
                    {/*    {itemWell.urls.map(item => (*/}
                    {/*        */}
                    {/*    ))}*/}
                    {/*</div>*/}

                    <div className={s.wrapper_button}>
                        <div className={s.liner}>
                        <ButtonBorder label={'Назад'} callback={prevHandler} />
                        <ButtonBorder label={'Далее'} callback={nextHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
