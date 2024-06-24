import { useContext } from "react";
import { Context } from "../../services/memory";
import Objective from "./objectives";

function List() {
    const [state, dispatch] = useContext(Context);
    return (
        <>
        {state.order.map(id=> <Objective key={id} {...state.objectives[id]} />)}
        </>
    );
}

export default List;
