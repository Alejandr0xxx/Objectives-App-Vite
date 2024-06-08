import Styles from './header.module.css';
import LogoSVG from '../../img/Logo.svg?react';
import IconProfileSVG from '../../img/IconProfile.svg?react';
import Link from './link';
function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.logo}>
                <LogoSVG className={Styles.logoStyle} />
                <a className={Styles.appNameStyle} href="/">MetasApp</a>
            </div>
            <nav>
                    <Link href="/perfil" Icon={IconProfileSVG}>
                    </Link>
            </nav>
        </div>
    )
}
export default Header