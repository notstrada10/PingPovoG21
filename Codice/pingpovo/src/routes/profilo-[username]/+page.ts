import { get_profilo } from '$lib/api.js';

export async function load({ params }) {

    return {
        profilo: await get_profilo(params.username)
    }
}