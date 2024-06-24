import Link from './link.jsx';
import MainStyle from './mainContent.module.css';
import ListSVG from '../../img/List.svg?react';
import CreateSVG from '../../img/Create.svg?react';
import { Outlet } from 'react-router-dom';
function MainContent() {
    return (
        <div className={MainStyle.container}>
            <aside className={MainStyle.aside}>
                <Link href="/list"  Icon={ListSVG} text="Objectives List">

                </Link>
                <Link href="/newObjective" Icon={CreateSVG}  text="New Objective">

                </Link>
            </aside>
            <main className={MainStyle.main}>
                <Outlet/> 
            </main>
        </div>
    )
}
export default MainContent