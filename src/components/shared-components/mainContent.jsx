import Link from './link.jsx';
import MainStyle from './mainContent.module.css';
import ListSVG from '../../img/List.svg?react';
import CreateSVG from '../../img/Create.svg?react';
function MainContent({ children }) {
    return (
        <div className={MainStyle.container}>
            <aside className={MainStyle.aside}>
                <Link href="/lista"  Icon={ListSVG} text="Objectives List">

                </Link>
                <Link href="/crear" Icon={CreateSVG}  text="New Objective">

                </Link>
            </aside>
            <main className={MainStyle.main}>
                {children}
            </main>
        </div>
    )
}
export default MainContent