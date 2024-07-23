import React, { ChangeEvent, useState } from "react";
import styles from "./credentials.module.css";
import { useNavigate } from "react-router-dom";

interface CredentialProps {
    send: Function;
    tittle: string;
    button: string;
    haveAnAccount: string;
    to: string;
}

export default function Credentials({ send, tittle, button, haveAnAccount, to }: CredentialProps) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        user: '',
        password: ''
    });

    const { user, password } = form;

    const onChange = (event: ChangeEvent, prop: string) =>{
        const value = (event.target as HTMLInputElement).value;
        setForm(form => ({...form, [prop]: value}));
    }

    const onAccess = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        send(form)
    }

    return (
        <div className={"card" + styles.auth}>
            <h1 className={styles.head}>{tittle}</h1>
            <form className="p-4">
                <label className="label">
                    user
                    <input
                        className="input"
                        placeholder="example@email.com"
                        value={user}
                        type="email"
                        onChange={(e) => onChange(e, "user")}
                    />
                </label>
                <label className="label">
                    password
                    <input
                        className="input"
                        placeholder="password123"
                        value={password}
                        type="password"
                        onChange={(e) => onChange(e, "password")}
                    />
                </label>
            </form>
            <div className="">
                <button className="button--black" onClick={(e)=> onAccess(e)}>{button}</button>
                <a className="button--gray" href={to}>{haveAnAccount}</a>
            </div>

        </div>
    )
};
