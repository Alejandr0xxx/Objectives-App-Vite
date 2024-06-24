import { useState } from 'react';
import styles from './details.module.css'
import { redirect, useFetcher, useNavigate } from 'react-router-dom';



function Details({objective = {}, isEditing = false}) {

    const navigate = useNavigate()
    const fetcher = useFetcher();
    const [isCompleted, setisCompleted] = useState(false)
    const onChange = (event) => {
        if (event.target.name === 'completed') {
            setisCompleted(event.target.value === 'true');
        }
    }

    const frecuencies = ['daily', 'weekly', 'monthly', 'yearly'];
    const icons = ['💻', '✈️', '🏃', '📚', '🍗'];



    return (
        <fetcher.Form method='post' className='card'>
            <div className='p-4'>
                <label className="label">
                    Describe your objective
                    <input 
                    className='input' 
                    type="text" 
                    placeholder="e.g. 52 walks" 
                    name='details' 
                    defaultValue={isEditing ? objective.details : ''} 
                    autoFocus 
                    required/>
                </label>
                <label className='label'>
                    How often do you hope to achieve your objective? (e.g. once a week)
                    <div className="flex">
                        <input 
                        className='input mr-6' 
                        type="number" name='events' 
                        defaultValue={isEditing ? objective.events : 1} 
                        required 
                        />
                        <select 
                        className='input' 
                        name='frecuency' 
                        defaultValue={isEditing ? objective.frecuency : 'daily'} 
                        required>
                            {frecuencies.map(frecuencies => <option key={frecuencies} value={frecuencies}>{frecuencies}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you hope to achieve you objective?
                    <input 
                    className='input' 
                    type="number" 
                    name='objective' 
                    defaultValue={isEditing ? objective.objective : 1} 
                    required 
                    />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input 
                    className='input' 
                    type="date" 
                    name='deadline' 
                    defaultValue={isEditing ? objective.deadline : '2025-01-01'} 
                    required 
                    />
                </label>
                <label className="label">
                    Have you completed this objective before?
                    <label className="label">
                        <input
                            className='mt-1'
                            onChange={(e) => onChange(e)}
                            value={true}
                            name="completed"
                            type="radio"
                            defaultChecked={isEditing ? objective.completedTimes > 1 : null}
                            required
                        />
                        Yes
                    </label>
                    <label className="label">
                        <input
                            onChange={(e) => onChange(e)}
                            value={false}
                            name="completed"
                            type="radio"
                            defaultChecked={isEditing ? objective.completedTimes === 0 : null }
                            required
                        />
                        No
                    </label>
                    </label>
                {isCompleted &&
                    <>
                        <label className='label'>
                            How many times have you completed this objective before?
                            <input 
                            name='completedTimes' 
                            defaultValue={isEditing ? objective.completedTimes : 1} 
                            type="number" 
                            className='input' 
                            required />
                        </label>
                    </>
                }
                <label className="label">
                    Choose an icon
                    <select 
                    className='input' 
                    name='icon' 
                    defaultValue={ isEditing ? objective.icon : '💻'} 
                    required
                    >
                        {icons.map(icons => <option key={icons} value={icons}>{icons}</option>)}
                    </select>
                </label>
            </div>
            <div className={styles.buttons}>
                <button 
                className='button--black' 
                type='submit'>Create</button>
                <button 
                className='button--gray' 
                type='button' onClick={() => { navigate(-1) }} >Cancel</button>
            </div>
        </fetcher.Form>
        
    );
}


export default Details;