import styles from './profile.module.css'
import defaultPfp from '../../img/defaultpfp.png'
import { useContext, useState } from 'react'
import { Context } from '../../services/memory';
import Resizer from 'react-image-file-resizer'
export default function Profile() {

    const [, dispatch] = useContext(Context)
    const [form, setForm] = useState({
        Username: ''
    })
    const onChange = (event, prop) => {
        if(event.target.name === 'pfp') {
            const file = event.target.files[0];
            Resizer.imageFileResizer(
                file,
                100,
                100,
                'PNG',
                70,
                0,
                (resizedImage) => {
                    console.log(resizedImage)
                    dispatch({type: 'addPfp', pfpImage: resizedImage})
                },
                'base64'
            );
        }else{
            const data = event.target.value;
            setForm(state => ({...state, [prop]: data}))
        }
    }

    const update = () =>{
        console.log(form)
        dispatch({type:'updateUser', data: form})
    }

    const { profilePicture } = useContext(Context)[0];
    return (
        <div className={styles.profileContainer}>
            <div className="flex bg-red-400 w-full">
                <div>
                    <div>
                        <img className='h-40 w-40' src={profilePicture || defaultPfp} alt="Default profile picture" />
                        <input name='pfp' onChange={(e) => onChange(e)} className='flex' type="file" accept='image/*' /></div>
                    <div></div>
                </div>
            </div>
            <div className="flex bg-green-500 w-full"> 
                <form>
                    <label>
                        Username:
                        <input onChange={(e) => onChange(e, 'Username')}  type="text"/>
                    </label>
                    <button onClick={update}> SEND </button>
                </form>
            </div>
        </div>
    )
};
