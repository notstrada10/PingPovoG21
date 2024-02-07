import { get_amici } from "$lib/api"
import { credentials } from "$lib/store"
import { error } from "@sveltejs/kit";
import { get } from "svelte/store"

export async function load() {
    const cred = get(credentials);
    console.log(cred)
    if (!cred) {
        console.log("no credenziali")
        error(403, "No credentials");
    }
    const amici = await get_amici(cred.username);
    return {
        amici
    }
}