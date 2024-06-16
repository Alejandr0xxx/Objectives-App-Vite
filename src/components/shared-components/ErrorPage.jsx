import { useRouteError } from 'react-router-dom'
import styles from './errorPage.module.css'
export default function ErrorPage() {
    const error = useRouteError();
    return(
        <div className={styles.errorContainer} >
            <h1 className='mb-6'>Opps! An error has occurred :&#40;</h1>
            <i className='text-slate-600'>{error?.statusText || error?.message}</i>
        </div>
    )
};
