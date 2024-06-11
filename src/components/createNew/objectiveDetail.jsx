import { useEffect, useState } from 'react';
import styles from './details.module.css'
function Details() {

    const [form, setForm] = useState({
        details: '',
        events: 1,
        frecuency: 'daily',
        icon:'💻',
        objective: 1,
        deadline: '2030-01-01',
        completed: null,

    })

    const onChange = (event, prop) => {
        setForm(state => ({...state, [prop]: event.target.value}))
    }

    // useEffect(()=>{
    //     console.log(form)
    // },[form])

    const create = async() =>{
        console.log(form);
    };

    const {details, events, frecuency, icon, objective, deadline, completed} = form
    const frecuencies = ['daily', 'weekly', 'monthly', 'yearly'];
    const icons = ['💻', '✈️', '🏃', '📚', '🍗'];

    return (
        <div className='card'>
            <form action="" className='p-4'>
                <label className="label">
                    Describe your objective
                    <input className='input' type="text" placeholder="e.g. 52 walks" value={details} onChange={(e => onChange(e, 'details'))} autoFocus/>
                </label>
                <label className='label'>
                How often do you hope to achieve your objective? (e.g. once a week)
                <div className="flex">
                <input className='input mr-6' type="number" value={events} onChange={(e => onChange(e, 'events'))} />
                <select className='input'  value={frecuency} onChange={(e => onChange(e, 'frecuency'))}>
                {frecuencies.map(frecuencies => <option key={frecuencies} value={frecuencies}>{frecuencies}</option>)}
                </select>
                </div>                
                </label>
                <label className="label">
                How many times do you hope to achieve you objective?
                    <input className='input' type="number" placeholder="7" value={objective} onChange={(e => onChange(e, 'objective'))}/>
                </label>
                <label className="label">
                Do you have a deadline?
                    <input className='input'  type="date" value={deadline} onChange={(e => onChange(e, 'deadline'))}/>
                </label>
                <label className="label">
                Have you completed this objetive before?
                    <label className="label">
                        <input onChange={(e => onChange(e, 'completed'))} value={true} name="completed" type="radio"/>
                        Yes
                    </label>
                    <label className="label">
                        <input onChange={(e => onChange(e, 'completed'))} value={false} name="completed" type="radio"/>
                        No
                    </label>
                </label>
                <label  className="label">
                Choose an icon
                    <select  className='input' value={icon} onChange={(e => onChange(e, 'icon'))} >
                    {icons.map(icons => <option key={icons} value={icons}>{icons}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className='button--black' onClick={create}>Create</button>
                <button className='button--gray'>Cancel</button>
            </div>
        </div>
    );
}

export default Details;