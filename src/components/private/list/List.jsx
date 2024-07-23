import { useContext } from "react";
import { MemoryContext } from "../../../memory/memory";
import Objective from "./objectives.tsx";
import { Outlet } from "react-router-dom";

function List() {
    const [state] = useContext(MemoryContext);
    return (
        <>
        {state.order.map(id => <Objective key={id} {...state.objectives[id]} />)}
        <Outlet/>
        </>
    );
}

export default List;
