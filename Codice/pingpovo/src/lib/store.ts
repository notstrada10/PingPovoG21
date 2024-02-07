import { browser } from "$app/environment";
import { writable } from "svelte/store";

function get_initial() {
    if (!browser) {
        return undefined;
    }

    const storedCredentials = localStorage?.getItem("credentials");
    if (storedCredentials == "undefined") {
        return undefined;
    }
    const initialCredentials = storedCredentials ? JSON.parse(storedCredentials) : undefined;
    return initialCredentials;
}

// Create writable store with initial value
export const credentials = writable<undefined | { password: string, username: string }>(get_initial());

// Subscribe to changes and update local storage
credentials.subscribe(value => {
    if (browser)
        localStorage.setItem("credentials", JSON.stringify(value));
});

