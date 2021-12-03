import React, {useEffect, useState} from 'react';
import {Checkbox} from '@mui/material';
import {useHttp} from "../../hooks/http.hook";
import s from "../Students/Students.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

export const Tasks = () => {
    const [data, setData] = useState([]);

    const {request, error, clearError, loading} = useHttp();

    const getUser = async () => {
        try {
            const answer = await request(`/user/tasks/`, 'GET', null);
            console.log('taskkk-', answer)
            setData(answer);
        } catch (e){}
    }

    useEffect(() => {getUser()}, []);

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
            {loading ? (<div className={s.fff}><CircularProgress color="secondary" /></div>) : null}
            {data?.map((item) => {
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
                        <Checkbox inputProps={{readOnly: true}} checked={item.task.verifiability} disableRipple></Checkbox>
                        <div>
                            {item.task.description}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
