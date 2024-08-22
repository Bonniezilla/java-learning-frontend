export async function useUserData(id) {
    const response = await fetch(`http://localhost:8080/users/${id}`, {cache: "no-cache"}).then(response => response.json()).catch((e) => console.error(e.message));

    return response;
}