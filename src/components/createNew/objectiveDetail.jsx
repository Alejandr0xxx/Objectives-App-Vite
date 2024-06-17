import { useState } from 'react';
import styles from './details.module.css'
import { redirect, useFetcher, useNavigate } from 'react-router-dom';
import { createObj } from '../functions';

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    if (data.completedTimes === undefined) data.completedTimes = 0;
    if (Number(data.completedTimes) >= Number(data.objective)) { return alert('Completed times MUST NO be higher than the objective!   '), null }
    await createObj(data);
    return redirect('/list')

}

function Details() {

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
                    <input className='input' type="text" placeholder="e.g. 52 walks" name='details' autoFocus required />
                </label>
                <label className='label'>
                    How often do you hope to achieve your objective? (e.g. once a week)
                    <div className="flex">
                        <input className='input mr-6' type="number" name='events' defaultValue='1' required />
                        <select className='input' name='frecuency' required>
                            {frecuencies.map(frecuencies => <option key={frecuencies} value={frecuencies}>{frecuencies}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you hope to achieve you objective?
                    <input className='input' type="number" name='objective' defaultValue={1} required />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input className='input' type="date" name='deadline' defaultValue={'2025-01-01'} required />
                </label>
                <label className="label">
                    Have you completed this objetive before?
                    <label className="label">
                        <input className='mt-1' onChange={(e) => onChange(e)} value={true} name="completed" type="radio" required />
                        Yes
                    </label>
                    <label className="label">
                        <input onChange={(e) => onChange(e)} value={false} name="completed" type="radio" required />
                        No
                    </label>
                </label>
                {isCompleted &&
                    <>
                        <label className='label'>
                            How many times have you completed this objective before?
                            <input name='completedTimes' defaultValue={1} type="number" className='input' required />
                        </label>
                    </>
                }
                <label className="label">
                    Choose an icon
                    <select className='input' name='icon' required>
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