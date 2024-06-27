import styles from './header.module.css';
import LogoSVG from '../../img/Logo.svg?react';
import IconProfileSVG from '../../img/IconProfile.svg?react';
import Link from './link';
import { useContext } from 'react';
import { Context } from '../../services/memory';
function Header() {
    const {profilePicture, userInfo} = useContext(Context)[0]
    const {Username} = userInfo
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                
                <a className={styles.appNameStyle} href="/">
                <LogoSVG className={styles.logoStyle} />MetasApp</a>
            </div>
            <nav>
                    <span>Welcome, {Username}</span>
                    {!profilePicture && <Link href="/profile" Icon={IconProfileSVG}>
                    </Link>}
                    <a href="/profile">
                    <img src={profilePicture} className='h-full'/>
                    </a>
            </nav>
        </div>
    )
}
export default Header