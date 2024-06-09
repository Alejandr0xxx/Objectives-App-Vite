import styles from './objectives.module.css'

function Objective({Id, Details, Period, Icon, Objective, Deadline, Completed, Events}) {

    return (
        <div className={styles.objectiveContainer + " card"}>
            <div className={'flex items-center'}>
                <div className={styles.icon}>{Icon}</div>
                <p className={'ml-5 text-xl mr-10'}>{Events}
                    <sub className={'text-xs text-gray-500'}>/{Period}</sub>
                </p>
                <p>{Details}</p>
            </div>
            <div className={'flex'}>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{Completed} out of {Objective}</p>
                    <div className={styles.bar1}>
                        <div className={styles.bar2} 
                        style={{width: `${Math.round((Completed/Objective)*100)}%`}}>
                        </div>
                    </div>
                </div>
                <button className={styles.button + " button"}>¡Done!</button>
            </div>
        </div>
    );
}

export default Objective;