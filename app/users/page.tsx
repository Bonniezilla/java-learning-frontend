import { userData } from "../interface/userData";

export default async function Users() {

    let usersData: userData[] = await fetch("http://localhost:8080/users",  { cache: "no-cache"}).then((response) => response.json());

    return (
        <main className="flex flex-col justify-center items-center">
            {
                usersData.map((user) => (
                    <>
                        <h1 className="text-white bg-slate-800 w-full text-center text-3xl">{user.id}</h1>
                        <h1 className="text-emerald-500">{user.username}</h1>
                        <h1 className="text-slate-500">{user.email}</h1>
                        <hr />
                        <br /> 
                    </>
                ))
            }
        </main>
    )
} 