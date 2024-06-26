import { useContext } from "react";
import { Context } from "../../services/memory";
import Objective from "./objectives";
import { Outlet } from "react-router-dom";

function List() {
    const [state, dispatch] = useContext(Context);
    return (
        <>
        {state.order.map(id=> <Objective key={id} {...state.objectives[id]} />)}
        <Outlet/>
        </>
    );
}

export default List;
