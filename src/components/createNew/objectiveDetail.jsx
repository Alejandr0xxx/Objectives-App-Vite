import { useState } from 'react';
import styles from './details.module.css'
import {  redirect, useFetcher, useNavigate } from 'react-router-dom';
import { createObj } from '../functions';

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    if(data.completedTimes === undefined) data.completedTimes = 0; 
    await createObj(data);
    return redirect('/list')
}   

function Details() {

    const navigate = useNavigate()
    const fetcher = useFetcher();
    const [completedIn, setCompletedIn] = useState(false);

    const [form, setForm] = useState({
        details: '',
        events: 1,
        frecuency: 'daily',
        icon: '💻',
        objective: 1,
        deadline: '2025-01-01',
        completed: false,
        completedTimes: 1,
    })

    const onChange = (event, prop) => {
        setForm((state) =>({...state, [prop]: event.target.value}))
        let completed = prop === 'completed'
        if (completed) {
            setCompletedIn(event.target.value === 'true');
        }
    }
    const { details, events, frecuency, icon, objective, deadline, completedTimes } = form
    const frecuencies = ['daily', 'weekly', 'monthly', 'yearly'];
    const icons = ['💻', '✈️', '🏃', '📚', '🍗'];

    return (
        <fetcher.Form method='post' className='card'>
            <div className='p-4'>
                <label className="label">
                    Describe your objective
                    <input className='input' type="text" placeholder="e.g. 52 walks" name='details' value={details} onChange={(e => onChange(e, 'details'))} autoFocus />
                </label>
                <label className='label'>
                    How often do you hope to achieve your objective? (e.g. once a week)
                    <div className="flex">
                        <input className='input mr-6' type="number" name='events' value={events} onChange={(e => onChange(e, 'events'))} />
                        <select className='input' name='frecuency' value={frecuency} onChange={(e => onChange(e, 'frecuency'))}>
                            {frecuencies.map(frecuencies => <option key={frecuencies} value={frecuencies}>{frecuencies}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you hope to achieve you objective?
                    <input className='input' type="number" placeholder="7" name='objective' value={objective} onChange={(e => onChange(e, 'objective'))} />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input className='input' type="date" name='deadline' value={deadline} onChange={(e => onChange(e, 'deadline'))} />
                </label>
                <label className="label">
                    Have you completed this objetive before?
                    <label className="label">
                        <input onChange={(e => onChange(e, 'completed'))}  value={true} name="completed" type="radio" />
                        Yes
                    </label>
                    <label className="label">
                        <input onChange={(e => onChange(e, 'completed'))} value={false} name="completed" type="radio" />
                        No
                    </label>
                </label>
                {completedIn &&
                    <>
                        <label className='label'>
                            How many times have you completed this objective before?
                            <input  onChange={(e => onChange(e, 'completedTimes'))}  name='completedTimes' value={completedTimes} type="number" className='input'/>
                        </label>
                    </>
                }
                <label className="label">
                    Choose an icon
                    <select className='input' name='icon' value={icon} onChange={(e => onChange(e, 'icon'))} >
                        {icons.map(icons => <option key={icons} value={icons}>{icons}</option>)}
                    </select>
                </label>
            </div>
            <div className={styles.buttons}>
                <button className='button--black' type='submit'>Create</button>
                <button className='button--gray' type='button' onClick={() => { navigate(-1) }} >Cancel</button>
            </div>
        </fetcher.Form>
    );
}

export default Details;