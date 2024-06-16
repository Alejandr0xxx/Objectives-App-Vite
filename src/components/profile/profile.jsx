import { useNavigate } from "react-router-dom"

export default function Profile() {
    const navigate = useNavigate()
    return(
        <div className="flex flex-col w-fit m-auto justify-center h-full">
        <h1 className="text-xl font-bold">Pagina en costruccion...</h1>
        <button className="button nm-flat-white" onClick={() => navigate(-1)} >Volver atras</button>
        </div>
    )
};
