import styles from './header.module.css';
import LogoSVG from '../../img/Logo.svg?react';
import IconProfileSVG from '../../img/IconProfile.svg';
import { useContext, useState } from 'react';
import { MemoryContext } from '../../memory/memory';
import DDProfileMenu from '../assets/DropDownPfpMenu/DDProfileMenu';
import { useLocation } from 'react-router-dom';

function Header() {
    const [state] = useContext(MemoryContext);
    const { profilePicture, userInfo } = state;
    const { Username } = userInfo;
    const [DDPMenuIsOpen, setDDPMenuIsOpen] = useState(false);
    const locate = useLocation()
    const path = locate.pathname === '/login' || locate.pathname === '/register'
    const pfpOnClick = () =>{
        setDDPMenuIsOpen(prevState => !prevState); 
    }
    let pfp = profilePicture || IconProfileSVG
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a className={styles.appNameStyle} href="/">
                    <LogoSVG className={styles.logoStyle} />MetasApp</a>
            </div>
            <nav>
                {!path &&
                <div className='flex flex-row h-full items-center'>
                    {Username && <p>Welcome, {Username}</p>}
                    <button onClick={pfpOnClick} className='h-full cursor-pointer'>
                        <img src={pfp} className='ml-1 h-full rounded-full' />
                    </button>
                </div>}
                {DDPMenuIsOpen &&
                    <DDProfileMenu closeMenu={() => setDDPMenuIsOpen(false)}/>
                }
            
            </nav>
        </div>
    )
}
export default Header