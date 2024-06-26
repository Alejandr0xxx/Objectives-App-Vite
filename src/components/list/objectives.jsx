import { Link } from 'react-router-dom';
import styles from './objectives.module.css';
function Objective({ icon, events, frecuency, objective, completedTimes, details, id }) {
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
                        <div className='relative m-2 mx-5'>
                            <p className='text-center'>{completedTimes} out of {objective}</p>
                            <div className={styles.bar1}>
                                <div className={styles.bar2}
                                    style={{ width: `${Math.round((completedTimes / objective) * 100)}%` }} />
                            </div>
                        </div>
                    </div>
                    <form method='post' className={"button"}>
                        <button type='submit'>¡Done!</button>
                    </form>
                </div>
            </Link>
        </>
    );
}


export default Objective;