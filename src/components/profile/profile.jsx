import styles from './profile.module.css'
import defaultPfp from '../../img/defaultpfp.png'
import { useContext, useState } from 'react'
import { Context } from '../../services/memory';
export default function Profile() {
    const [pfpImage, setpfpImage] = useState(); 
    const [state, dispatch] = useContext(Context)
    const onChange = (event) => {
        const value = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(){
            const base64string = reader.result.split(',')[1];   
            console.log(base64string)
            setpfpImage(base64string)
        }
        reader.readAsDataURL(value)
        // const pfp = setpfpImage(value);
        // console.log(pfp)
        // dispatch({type: 'addpfd', pfpImage})
    }
    return (
        <div className={styles.profileContainer}>
            <div className="flex bg-red-400 w-full">
                <div>
                    <img className='h-40 w-40' src={pfpImage || defaultPfp } alt="Default profile picture"/>
                    <input onChange={(e) => onChange(e)} className='flex' type="file" accept='image/*'/>
                </div>
            </div>
            <div className="flex bg-green-500 w-full"> a</div>
        </div>
    )
};
