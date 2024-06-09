import styles from './link.module.css'
function Link({ Icon, text, href }) {
    return (
        <a href={href} className={styles.link}>
            <Icon className={styles.iconStyle}/>
            {text && <span className={styles.text}>{text}</span>}
        </a>
    );
};
export default Link;