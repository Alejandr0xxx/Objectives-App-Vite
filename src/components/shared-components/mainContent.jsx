import Link from './link.jsx';
import MainStyle from './mainContent.module.css';
import ListSVG from '../../img/List.svg?react';
import CreateSVG from '../../img/Create.svg?react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../services/memory.jsx';
function MainContent() {
    const navigate = useNavigate();
    const locate = useLocation();
    const [state] = useContext(Context)
    const areThereObjectives = state.order.length  === 0;
    const path = locate.pathname === '/' || locate.pathname === '/list';

    return (
        <div className={MainStyle.container}>
            <aside className={MainStyle.aside}>
                <Link href="/list"  Icon={ListSVG} text="Objectives List">

                </Link>
                <Link href="/newObjective" Icon={CreateSVG}  text="New Objective">

                </Link>
            </aside>
            <main className={MainStyle.main}>
            {areThereObjectives && path &&
                <div className={MainStyle.createMain} >
                    <h1>There're no objectives yet</h1>
                    <p> Let's create one!</p>
                    <button className='button--black mt-3' onClick={() => navigate('/newObjective')}>Create</button>
                </div>
            }
                <Outlet/> 
                </main>
        </div>
    )
}
export default MainContent