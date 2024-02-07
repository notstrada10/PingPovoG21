import { get_utenti } from "$lib/api";

export async function load() {
    return {
        classifica: await get_utenti()
    }
}