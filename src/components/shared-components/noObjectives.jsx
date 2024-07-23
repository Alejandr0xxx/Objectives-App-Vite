import { useContext } from "react";
import { MemoryContext } from "../../memory/memory";
import { useLocation, useNavigate } from "react-router-dom";

export default function NoObjectives() {
    const [state] = useContext(MemoryContext);
    const areThereObjectives = state && state.order && state.order.length === 0;;
    const navigate = useNavigate();
    const locate = useLocation();
    const path = locate.pathname === '/' || locate.pathname === '/list' || locate.pathname === '/profile';
    return (
        <>
            {areThereObjectives && path &&
                <div className='flex flex-col items-center h-full justify-center ' >
                    <h1>There&apos;re no objectives yet</h1>
                    <p> Let&apos;s create one!</p>
                    <button className='button--black mt-3' onClick={() => navigate('/newObjective')}>Create</button>
                </div>}
        </>
    )

}