import styles from './profile.module.css'
import defaultPfp from '../../../img/defaultpfp.png'
import { useContext, useState } from 'react'
import { MemoryContext } from '../../../memory/memory';
import List from '../list/List';
import NoObjectives from '../../shared-components/noObjectives';
import ChangePfp from './changepfp';
import Modal from '../../shared-components/Modal';
export default function Profile() {

    const [, dispatch] = useContext(MemoryContext)
    const [form, setForm] = useState({
        Username: null,
        Name: null,
        Lastname: null,
    })
    const onChange = (event, prop) => {
            const data = event.target.value;
            setForm(state => ({ ...state, [prop]: data }))
        
    }

    const update = () => {
        if(Object.values(form).some(value => !value || value === '')) return;
        dispatch({ type: 'updateUser', data: form })
    }
    const [changepfp, setChangePfp] = useState(false)
    const changePfp = () => {
        setChangePfp(true)
    }

    const { profilePicture } = useContext(MemoryContext)[0];
    return (
        <>
            {changepfp && <Modal><ChangePfp setChangePfp={setChangePfp}/> </Modal>}
            <div className={styles.profileContainer}>
                <div className="flex w-full flex-col">
                    <div className='flex justify-center items-center h-full flex-col   '>
                        <img className={styles.pfp} src={profilePicture || defaultPfp} alt="Default profile picture" />
                        <button onClick={changePfp} className='button mt-3'>Update profile picture</button>
                    </div>
                    <div className='flex h-full justify-center items-center'>
                        <div className={styles.objectivesContainer}>
                            <List />
                            <NoObjectives />
                        </div>
                    </div>
                </div>
                <div className={styles.profileFormContainer}>
                    <form className={styles.form}>
                        <label className='label'>
                            Username:
                            <input className='input' onChange={(e) => onChange(e, 'Username')} placeholder='_XxJhonxX_' type="text" required />
                        </label>
                        <label className='label'>
                            Name:
                            <input className='input' onChange={(e) => onChange(e, 'Name')} placeholder='John' type="text" required />
                        </label>
                        <label className='label'>
                            Last Name:
                            <input className='input' onChange={(e) => onChange(e, 'Lastname')} placeholder='Doe' type="text" required />
                        </label>
                        <label className='label'>
                            Email:
                            <input className='input' onChange={(e) => onChange(e, 'Lastname')} placeholder='example@email.com' type="email" required />
                        </label>
                        <button className='button self-center' onClick={update}> SEND </button>
                    </form>
                </div>
            </div>
        </>
    )
};
