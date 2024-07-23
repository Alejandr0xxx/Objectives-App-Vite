import { useContext } from "react";
import Credentials from "../../shared-components/credentials";
import { authContext } from "../../../memory/AuthMemory";
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from "react-router-dom";

export default function Login() {
const [state, dispatch] = useContext(authContext);
const navigate = useNavigate();
const token = uuidv4();
const send = async(form) =>{
    dispatch({type: 'set', token: token})
    navigate("/list");
}
    return(
        <Credentials
        send={send}
        tittle="Login"
        button="Login"
        haveAnAccount="I don't have an account"
        to="/register"
        ></Credentials>
    )
}
