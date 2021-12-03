import React, {useEffect, useState} from 'react';
import {Checkbox} from '@mui/material';

export const Tasks = () => {
    const [data, setData] = useState({
        tasks: [
            {
                name: 'Название задания',
                complete: true,
            },
            {
                name: 'Название задания',
                complete: false,
            },
            {
                name: 'Название задания',
                complete: true,
            },
        ]
    });

    const callback = () => {};

    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            marginTop: '20px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            background: '#fff',
            marginBottom: '20px',
            fontFamily: 'Montserrat'
        }}>
            {data.tasks.map((item) => {
                return (
                    <div style={{
                        borderRadius: '5px',
                        background: '#D5D9DC',
                        padding: '8px',
                        display: 'flex',
                        marginBottom: '8px',
                        alignItems: 'center'
                    }}
                    onClick={callback}>
                        <Checkbox inputProps={{readOnly: true}} checked={item.complete} disableRipple></Checkbox>
                        <div>
                            {item.name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}