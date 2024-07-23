import Credentials from "../../shared-components/credentials";

export default function Register() {
    
const send = async(form) =>{
    
}
    return(
        <Credentials
        send={send}
        tittle="Register"
        button="Register"
        haveAnAccount="I have an account"
        to="/login"
        ></Credentials>
    )
}
