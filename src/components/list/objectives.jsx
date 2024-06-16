import { useFetcher, useLoaderData } from 'react-router-dom';
import { getAllObj, updateObj } from '../functions';
import styles from './objectives.module.css'

export async function loader() {
    let objectives = await getAllObj();
    return { objectives }
}

export async function action({ request }) {
    const formData = await request.formData();
    const id = formData.get('id')
    const objectives = await getAllObj();
    const objective = objectives.find(objective => objective.id === id);
    const completedTimes = Number(objective.completedTimes) + 1;
    return objective.completedTimes < objective.objective ? await updateObj({ id, newData: { completedTimes } }): null
}

function Objective() {
    const { objectives } = useLoaderData();
    const fetcher = useFetcher();
    return (
        <>
            {objectives?.length >= 1 ?
                objectives.map((objective) => (
                    <div key={objective.id} className={styles.objectiveContainer + " card"}>
                        <div className={'flex items-center'}>
                            <div className={styles.icon}>{objective?.icon}</div>
                            <p className={'ml-5 text-xl mr-10'}>{objective?.events}
                                <sub className={'text-xs text-gray-500'}>/{objective?.frecuency}</sub>
                            </p>
                            <p>{objective?.details}</p>
                        </div>
                        <div className={'flex'}>
                            <div className='relative m-2 mx-5'>
                                <p className='text-center'>{objective?.completedTimes} out of {objective?.objective}</p>
                                <div className={styles.bar1}>
                                    <div className={styles.bar2}
                                        style={{ width: `${Math.round((objective?.completedTimes / objective?.objective) * 100)}%` }} />
                                </div>
                            </div>
                        </div>
                        <fetcher.Form method='post' className={styles.button + " button"} >
                            <input type='hidden' name='id' value={objective.id} />
                            <button type='submit'>¡Done!</button>
                        </fetcher.Form>
                    </div>
                )) : (
                    <div className={styles.createMain} >
                        <h1>There're no objectives yet</h1>
                        <p> Let's create one!</p>
                        <a href="/newObjetive" className='button--black mt-3'  ><button>Create</button></a>
                    </div>)
            }
        </>
    );
}

export default Objective;