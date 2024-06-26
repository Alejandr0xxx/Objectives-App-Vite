import { useContext, useEffect, useState } from 'react';
import styles from './details.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../services/memory';



function Details() {
    const { id } = useParams();
    const [state, dispatch] = useContext(Context);
    const navigate = useNavigate()
    const [isCompleted, setisCompleted] = useState(false)
    const [form, setForm] = useState({
        details: '',
        events: 1,
        frecuency: 'daily',
        objective: 1,
        deadline: '2025-01-01',
        completedTimes: 0,
        completedTimesBef: null,
        isCompletedBef: null,
        icon: '💻',
    })

    useEffect(() => {
        if (!id) return;
        const objective = state.objectives[id];
        if (!objective) return navigate('/list');
        console.log(objective)
        setForm(objective);
    }, [id])


    const onChange = (event, prop) => {
        const value = event.target.value;
        setForm(state => ({ ...state, [prop]: value }));
        if (event.target.name === 'completed') { setisCompleted(value === 'true'); }
    }


    const create = () => {
        console.log('Creandoe lemento')
        dispatch({ type: 'create', objective: form })
        navigate('/list')
    }

    const update = () => {
        dispatch({ type: 'update', objective: form })
        navigate('/list')
    }

    const destroy = () =>{
        dispatch({type: 'destroy', id})
        navigate('/list')
    }

    const frecuencies = ['daily', 'weekly', 'monthly', 'yearly'];
    const icons = ['💻', '✈️', '🏃', '📚', '🍗'];



    return (
        <div method='post' className='card'>
            <div className='p-4'>
                <label className="label">
                    Describe your objective
                    <input
                        className='input'
                        type="text"
                        placeholder="e.g. 52 walks"
                        name='details'
                        onChange={(e) => onChange(e, 'details')}
                        value={form.details}
                        autoFocus
                        required />
                </label>
                <label className='label'>
                    How often do you hope to achieve your objective? (e.g. once a week)
                    <div className="flex">
                        <input
                            className='input mr-6'
                            type="number" name='events'
                            onChange={(e) => onChange(e, 'events')}
                            value={form.events}
                            required
                        />
                        <select
                            className='input'
                            name='frecuency'
                            onChange={(e) => onChange(e, 'frecuency')}
                            value={form.frecuency}
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
                        onChange={(e) => onChange(e, 'objective')}
                        value={form.objective}
                        required
                    />
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input
                        className='input'
                        type="date"
                        name='deadline'
                        onChange={(e) => onChange(e, 'deadline')}
                        value={form.deadline}
                        required
                    />
                </label>
                <label className="label">
                    Have you completed this objective before?
                    <label className="label">
                        <input
                            className='mt-1'
                            value={true}
                            name="completed"
                            type="radio"
                            onChange={(e) => onChange(e, 'isCompletedBef')}
                            required
                        />
                        Yes
                    </label>
                    <label className="label">
                        <input
                            name="completed"
                            value={false}
                            type="radio"
                            onChange={(e) => onChange(e, 'isCompletedBef')}
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
                                type="number"
                                onChange={(e) => onChange(e, 'completedTimesBef')}
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
                        onChange={(e) => onChange(e, 'icon')}
                        value={form.icon}
                        required
                    >
                        {icons.map(icons => <option key={icons} value={icons}>{icons}</option>)}
                    </select>
                </label>
            </div>
            <div className={styles.buttons}>
                {!id && <button
                    className='button--black'
                    type='button' onClick={create}>Create</button>}
                {id && <button
                    className='button--black'
                    type='button' onClick={update}>Update</button>
                }
                {id && <button
                    className='button--red'
                    type='button' onClick={destroy}>Delete</button>
                }
                <button
                    className='button--gray'
                    type='button' onClick={() => { navigate(-1) }} >Cancel</button>
            </div>
        </div>

    );
}


export default Details;