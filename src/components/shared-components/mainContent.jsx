import Link from './link.jsx';
import MainStyle from './mainContent.module.css';
import ListSVG from '../../img/List.svg?react';
import CreateSVG from '../../img/Create.svg?react';
import { Outlet, useLocation } from 'react-router-dom';
import NoObjectives from './noObjectives.jsx';
function MainContent() {
const locate = useLocation()
const path = locate.pathname === '/profile'

    return (
        <div className={MainStyle.container}>
            <aside className={MainStyle.aside}>
                <Link href="/list"  Icon={ListSVG} text="Objectives List">

                </Link>
                <Link href="/newObjective" Icon={CreateSVG}  text="New Objective">

                </Link>
            </aside>
            <main className={MainStyle.main}>
                {!path && <NoObjectives/>}
                <Outlet/> 
                </main>
        </div>
    )
}
export default MainContent