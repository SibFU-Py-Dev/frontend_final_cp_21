import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {Button, LinearProgress} from '@mui/material';
import {useLern} from "../../hooks/useLern";
import {useHintSystem} from "../../hooks/useHintSystem";
import {HintPopup} from "../HintPopup/HintPopup";

const Achievement = (props) => {
    return (
        <div className={s.achievement}>
            <GlobalSvgSelector id={props.svgId}/>
            {props.name}
        </div>
    );
}

const dataHint = [
    {
        label: 'Адаптивные курсы',
        text: 'Скорее присоединяйся к нам!'
    },
]

export const Header = () => {
    const lern = useLern();
    const [popup, setPopup] = useState(false);
    const hintSystem = useHintSystem();

    useEffect(() => {
        hintSystem.changeDataHint(dataHint);
        hintSystem.nextHint();
    }, []);

    const startHintHandler = () => {
        hintSystem.nextHint();
    }



    const data = {
        currentLevel: 5,
        currentXP: 1000,
        needXP: 2000,
        achievements: [
            {
                svgId: 'ok',
                name: 'Название достижения'
            },
            {
                svgId: 'action_icon_button',
                name: 'Название достижения'
            },
            {
                svgId: 'ok',
                name: 'Название достижения'
            },
            {
                svgId: 'setting',
                name: 'Название достижения'
            },
        ]
    }

    return (
        <div className={s.root}>
            <div className={s.container} >
                <div className={s.title}>PASCAL</div>

                <div className={s.wrapper}>
                    <Button sx={{marginRight:'20px'}} className={((hintSystem.statusHint === 1) ? (s.hint_active) : null)} onClick={() => {lern.openHandler(); startHintHandler()}} variant='outlined'>Адаптационный курс <HintPopup index={1} /></Button>

                    {
                        popup ?
                        <div className={s.popup}>
                            <div className={s.popup_section} style={{justifyContent: 'space-evenly'}}>
                                {[
                                    <div style={{textAlign: 'center', fontSize: '24px'}}>Последние достижения</div>
                                ].concat(data.achievements.slice(0, 4).map((item) => {
                                    return (
                                        <Achievement svgId={item.svgId} name={item.name}/>
                                    )
                                }))}
                            </div>
                            <div className={s.popup_section} style={{justifyContent: 'center'}}>
                                <div style={{fontSize: '26px', marginBottom: '30px', textAlign: 'center'}}>
                                    {`Уровень: ${data.currentLevel}`}
                                </div>
                                <LinearProgress value={data.currentXP / data.needXP * 100} variant='determinate'
                                    sx={{height: '24px', width: '100%', borderRadius: '12px', marginBottom: '30px'}}/>
                                <div style={{fontSize: '24px', marginBottom: '30px', textAlign: 'center'}}>
                                    {`Прогресс: ${data.currentXP} / ${data.needXP} XP`}
                                </div>
                            </div>
                        </div>:
                        null
                    }

                    <div className={s.progress_container} onMouseEnter={() => setPopup(true)} onMouseLeave={() => setPopup(false)}>
                        <LinearProgress value={data.currentXP / data.needXP * 100} variant='determinate'
                        sx={{height: '18px', width: '250px', borderRadius: '9px'}}/>
                    </div>

                    <div
                        className={s.button_profile}
                    >
                        <GlobalSvgSelector id='profile' />
                    </div>

                    <div
                        className={s.button_notifi}
                    >
                        <GlobalSvgSelector id='notification' />
                    </div>
                </div>
            </div>
        </div>
    );
};
