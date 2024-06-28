import { Link } from 'react-router-dom';
import styles from './objectives.module.css';
import { useContext } from 'react';
import { Context } from '../../services/memory';
function Objective({ icon, events, frecuency, objective, completedTimes, details, id }) {

    const [, dispatch] = useContext(Context)

    const completeOne = () => {
        dispatch({ type: 'completeOne', id })
    }

    return (
        <>
            <Link to={`/list/${id}`}>
                <div className={styles.objectiveContainer + " card"}>
                    <div className={'flex items-center'}>
                        <div className={styles.icon}>{icon}</div>
                        <p className={'ml-5 text-xl mr-10'}>{events}
                            <sub className={'text-xs text-gray-500'}>/{frecuency}</sub>
                        </p>
                        <p>{details}</p>
                    </div>
                    <div className={'flex'}>
                        <div className='  m-2 mx-5'>
                            <p className='text-center'>{completedTimes} out of {objective}</p>
                            <div className={styles.bar1}>
                                <div className={styles.bar2}
                                    style={{ width: `${Math.round((completedTimes / objective) * 100)}%` }} />
                            </div>
                        </div>
                    </div>
                    <button className={"button--gray"} type='button'>¡Done!</button>
                </div>
            </Link>

        </>
    );
}


export default Objective;