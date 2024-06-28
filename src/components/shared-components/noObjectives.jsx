import { useContext } from "react";
import { Context } from "../../services/memory";
import { useLocation, useNavigate } from "react-router-dom";

export default function NoObjectives() {
    const [state] = useContext(Context);
    const areThereObjectives = state && state.order && state.order.length === 0;;
    const navigate = useNavigate();
    const locate = useLocation();
    const path = locate.pathname === '/' || locate.pathname === '/list' || locate.pathname === '/profile';
    return (
        <>
            {areThereObjectives && path &&
                <div className='flex flex-col items-center h-full justify-center ' >
                    <h1>There're no objectives yet</h1>
                    <p> Let's create one!</p>
                    <button className='button--black mt-3' onClick={() => navigate('/newObjective')}>Create</button>
                </div>}
        </>
    )

}