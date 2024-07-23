import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "../../memory/AuthMemory"

export default function Auth() {
    const [state] = useContext(authContext);
    if(state.isAuth === false){
        return <Navigate to={'/login'}/>
    }
    return <Outlet></Outlet>
}
