<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	let mod_partita = 21; //da fare in modo che va in base al selezionato
	let classificata = false;
	let servizio_di = 1;
	let cambio = 5;
	if (mod_partita == 11) cambio = 2;
	let winner: string;
	let punteggio_1 = 0;
	let punteggio_2 = 0;
	let ended = false;

	function updateWin() {
		if (punteggio_1 == mod_partita || punteggio_2 == mod_partita) {
			if (punteggio_1 > punteggio_2) {
				winner = 'Giocatore 1';
			} else {
				winner = 'Giocatore 2';
			}
			ended = true;
		}
	}

	function aggiorna_chi_batte() {}

	function servizio() {
		if ((punteggio_1 + punteggio_2) % cambio == 0) {
		}
	}

	function incr_1() {
		punteggio_1++;
		updateWin();
	}

	function incr_2() {
		punteggio_2++;
		updateWin();
	}
</script>

<Menu></Menu>

{#if ended}
	<p>Ha vinto {winner}</p>
{:else}
	<button class="rosso" on:click={incr_1}>{punteggio_1}</button>
	<button class="blu" on:click={incr_2}>{punteggio_2}</button>
{/if}

<style>
	button {
		text-align: center;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #000000;
		padding: 12vw 50vw;
		display: block;
		color: #000000;
	}
	.rosso {
		background-color: orangered;
	}
	.blu {
		background-color: dodgerblue;
	}
</style>
