'use client'

import { useState } from "react";
import { userData } from "../../interface/userData";
import { useUserData } from "../../hooks/useUserData";

export default function () {

    const [user, setUser] = useState<userData>();

    async function requestUser(formData) {
        const id = formData.get("userId")
        const userRequest = await useUserData(id);

        return setUser(userRequest);
    }

    return (
        <main>
            <form action={requestUser}>
                <input type="number" name="userId" placeholder="Digite o ID do usuário aqui"/>
                <input type="submit" value="Enviar"/>
            </form>
            { user ?  
                <>
                    <h1>{user.id}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.username}</h1>
                </>
                : ""
            }
        </main>
    )
}