import { credentials } from "./store"
const base_url = "http://localhost:9999/api";

export const logout = () => {
    credentials.set(undefined);
}
export const login = async (username: string, password: string): Promise<boolean> => {
    const res = await fetch(base_url + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    });
    console.log(res)
    if (res.status == 200) {
        credentials.set({ username, password });
        return true;
    } else {
        credentials.set(undefined);
        return false;
    }
}

export const signup = async (
    email: string,
    password: string,
    telefono: string,
    username: string,
): Promise<boolean> => {
    const res = await fetch(base_url + "/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            telefono,
            username,
        })
    });
    console.log(res)
    if (res.status == 200) {
        credentials.set({ username, password });
        return true;
    } else {
        credentials.set(undefined);
        return false;
    }
}

export interface Amico {
    username: string,
    PP: string,
    numero: string
}[]
export const get_amici = async (utente: string): Promise<Amico[]> => {
    const res = await fetch(base_url + "/amicizie?" + new URLSearchParams({
        utente
    }), {});
    if (res.status == 200) {
        const d = await res.json();
        return d as Amico[];
    }
    return [];
}

export const get_profilo = async (username: string): Promise<Amico | undefined> => {
    const res = await fetch(base_url + "/profilo?" + new URLSearchParams({
        username
    }));
    if (res.status == 200) {
        const d = await res.json();
        return d as Amico;
    }
    return undefined;
}

export interface UtenteClassifica {
    username: string,
    PP: string
}[]
export const get_utenti = async (): Promise<UtenteClassifica[]> => {
    const res = await fetch(base_url + "/utenti");
    if (res.status == 200) {
        const d = await res.json();
        return d as UtenteClassifica[];
    }
    return [];
}

export const aggiungi_partita = async (
    winner: string,
    looser: string
): Promise<boolean> => {
    const res = await fetch(base_url + "/ppcalc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            winner,
            looser
        })
    });
    if (res.status == 200) {
        return true;
    } else {
        return false;
    }
}


export const aggiungi_amico = async (
    current: string,
    wanna_add: string
): Promise<boolean> => {
    const res = await fetch(base_url + "/amicizie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: current, amico: wanna_add
        })
    });
    if (res.status == 200) {
        return true;
    } else {
        return false;
    }
}