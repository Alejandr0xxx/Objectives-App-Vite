import styles from './link.module.css'

interface Link {
    Icon: any;
    text: string;
    href: string;
}
function Link({ Icon, text, href }: Link) {
    return (
        <a href={href} className={styles.link}>
            <Icon className={styles.iconStyle}/>
            {text && <span className={styles.text}>{text}</span>}
        </a>
    );
}
export default Link;
