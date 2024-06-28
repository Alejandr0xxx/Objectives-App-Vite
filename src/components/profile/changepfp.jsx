import { useContext, useState } from 'react';
import Resizer from 'react-image-file-resizer'
import { Context } from '../../services/memory';

export default function ChangePfp({setChangePfp }) {
    const [image, setImage] = useState(null)
    const onChange = (event) =>{
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
                    setImage(resizedImage)
                },
                'base64'
            );
    }

    const [, dispatch] = useContext(Context)

    const onClick = (e) =>{
        if(e.target.name === 'Cancel')setChangePfp(false);
        if(e.target.name === 'Change'){
            dispatch({type:'addPfp', pfpImage: image})
            setChangePfp(false)
        }
        if(e.target.name === 'Delete'){
            dispatch({type:'delPfp'})
            setChangePfp(false)
        }
    }
    return (
        <div className="bg-slate-50 flex h-fit flex-col ">
            <div className='flex flex-col'>
                <img className='' src={image}/>
                <input name='pfp' onChange={(e) => onChange(e)} type="file" accept='image/*' />
            </div>
            <div className="flex justify-between ">
                <button onClick={(e)=> onClick(e)} name='Change' className="button">Change</button>
                <button onClick={(e)=> onClick(e)}  name='Delete'>Delete</button>
                <button onClick={(e)=> onClick(e)} name='Cancel' className="button--red">Cancel</button>
            </div>
        </div>
    )
};
