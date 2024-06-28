import styles from './header.module.css';
import LogoSVG from '../../img/Logo.svg?react';
import IconProfileSVG from '../../img/IconProfile.svg?react';
import Link from './link';
import { useContext } from 'react';
import { Context } from '../../services/memory';
function Header() {
    const [state] = useContext(Context)
    const { profilePicture, userInfo } = state
    const { Username } = userInfo
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a className={styles.appNameStyle} href="/">
                    <LogoSVG className={styles.logoStyle} />MetasApp</a>
            </div>
            <nav>
                <div className='flex flex-row h-full items-center'>
                    {Username && <a href='/profile'>Welcome, {Username}</a>}
                    {!profilePicture && <Link href="/profile" Icon={IconProfileSVG}>
                    </Link>}
                    <a href="/profile" className='h-full'>
                        <img src={profilePicture} className='ml-1 h-full rounded-full'/>
                    </a>
                </div>
            </nav>
        </div>
    )
}
export default Header