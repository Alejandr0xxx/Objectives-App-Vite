import { Link, useLocation } from 'react-router-dom';
import styles from './objectives.module.css';
import { useContext } from 'react';
import { MemoryContext } from '../../../memory/memory';

interface MetaProps {
    id: string;
    icon: string;
    events: number;
    frecuency: number;
    objective: number;
    completedTimes: number;
    details: string;
}

function Objective({ icon, events, frecuency, objective, completedTimes, details, id }: MetaProps) {

    const [, dispatch] = useContext(MemoryContext)
    const completeOne = () => {
        dispatch({ type: 'completeOne', id })
    }

    const locate = useLocation()
    const path = locate.pathname === '/profile'
    
    return (
        <>
            <div className={styles.objectiveContainer + " card"}>
                    <Link className='flex flex-row w-full' to={`/list/${id}`}>
                        <div className={'flex items-center'}>
                            <div className={styles.icon}>{icon}</div>
                            <p className={'ml-5 text-xl mr-10'}>{events}
                                <sub className={'text-xs static text-gray-500'}>/{frecuency}</sub>
                            </p>
                            <p>{details}</p>
                        </div>
                        <div className={'flex w-full justify-center'}>
                            <div className=' flex flex-col m-2 mx-5 '>
                                <p className='text-center'>{completedTimes} out of {objective}</p>
                                <div className={styles.bar1} >
                                    <div className={styles.bar2}
                                        style={{ width: `${Math.round((completedTimes / objective) * 100)}%` }} />
                                </div>
                            </div>
                        </div>
                    </Link>
                    {!path && <button className={"button--gray"} onClick={completeOne} type='button'>¡Done!</button>}
            </div>

        </>
    );
}


export default Objective;