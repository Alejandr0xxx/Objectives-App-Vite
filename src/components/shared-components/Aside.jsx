import Link from "./link.tsx"
import MainStyle from './layout.module.css';
import ListSVG from '../../img/List.svg?react';
import CreateSVG from '../../img/Create.svg?react';
export default function Aside() {
    return (
        <>
            <aside className={MainStyle.aside}>
                <Link href="/list" Icon={ListSVG} text="Objectives List">

                </Link>
                <Link href="/newObjective" Icon={CreateSVG} text="New Objective">

                </Link>
            </aside>
        </>
    )
}
