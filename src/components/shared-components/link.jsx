import Styles from './link.module.css'
function Link({ Icon, text, href }) {
    return (
        <a href={href} className={Styles.link}>
            <Icon className={Styles.iconStyle}/>
            {text && <span className={Styles.text}>{text}</span>}
        </a>
    );
};
export default Link;