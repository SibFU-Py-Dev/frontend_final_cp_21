import React, {useState} from 'react';
import s from './Accordion.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";


export const Accordion = ({label, vallue, style, style_label}) => {
    const [status, setStatus] = useState(false);

    return (
        <div className={(status ? s.root_active : s.root)  + ' ' + style}>
            <div
                className={s.liner}
                onClick={() => setStatus(!status)}
            >
                <div className={s.label + ' ' + style_label}>
                    {label}
                </div>

                <GlobalSvgSelector id={status ? 'arrow_top' : 'arrow_bottom'} />
            </div>
            {status ? (
                <div className={s.body}>
                    {vallue}
                </div>
            ) : null}
        </div>
    );
};
