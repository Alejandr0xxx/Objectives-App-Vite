import styles from './header.module.css';
import LogoSVG from '../../img/Logo.svg?react';
import IconProfileSVG from '../../img/IconProfile.svg?react';
import Link from './link';
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <LogoSVG className={styles.logoStyle} />
                <a className={styles.appNameStyle} href="/">MetasApp</a>
            </div>
            <nav>
                    <Link href="/perfil" Icon={IconProfileSVG}>
                    </Link>
            </nav>
        </div>
    )
}
export default Header