import React, {useState} from 'react';
import s from './Header.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {Button, LinearProgress} from '@mui/material';

const Achievement = (props) => {
    return (
        <div className={s.achievement}>
            <GlobalSvgSelector id={props.svgId}/>
            {props.name}
        </div>
    );
}

export const Header = () => {
    const [popup, setPopup] = useState(false);

    const data = {
        progress: 50,
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
                    <Button sx={{marginRight:'20px'}} variant='outlined'>Адаптационный курс</Button>

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
                            <div className={s.popup_section}></div>
                        </div>:
                        null
                    }

                    <div className={s.progress_container} onMouseEnter={() => setPopup(true)} onMouseLeave={() => setPopup(false)}>
                        <LinearProgress value={data.progress} variant='determinate'
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
