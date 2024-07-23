import { useContext } from "react";
import { authContext } from "../../../memory/AuthMemory";
import styles from './DDProfileMenu.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
export default function DDProfileMenu({closeMenu}) {

    const [, dispatch] = useContext(authContext);
    const navigate = useNavigate();
    const onClick = (e) =>{
        if(e.target.name === 'profile'){ navigate('/profile')}
        if(e.target.name === 'logout'){ dispatch({type: 'logout'})}
        closeMenu()
    }

    return(
        <div className={styles.dropdown_container}>
            <ul className={styles.dropdown_menu}>
            <button className={styles.button} name={'profile'}onClick={e => onClick(e)}> Profile</button>
            <button className={styles.button} name={'logout'} onClick={e=> onClick(e)}>Logout</button>
            </ul>
        </div>
    )
}

DDProfileMenu.propTypes = {
    closeMenu: PropTypes.func
}