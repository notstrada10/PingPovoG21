export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/aggiungipartita-[punti1]-[punti2]": [3],
		"/amici": [4],
		"/classifica": [5],
		"/contapunti-[mod]-[max]": [6],
		"/creatorneo": [7],
		"/login": [8],
		"/logout": [9],
		"/profilo-[username]": [10],
		"/recupero": [11],
		"/sceltagioco": [12],
		"/signup": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';