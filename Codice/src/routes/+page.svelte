<script>
	import coppa from '$lib/images/coppa.svg';
	let accesso_effettuato = false;

	function prova_accedi() {
		accesso_effettuato = true;
	}
</script>

{#if accesso_effettuato}
	<p>
		<a href="/profilo-utente">@nickname</a><br />
		<a class="tasto-rosso" href="/contapunti">CONTA PUNTI</a><br />
		<a class="tasto-blu" href="aggiungi_partita">AGGIUNGI PARTITA</a> <br />
		<a class="tasto-rosso" href="crea_torneo">CREA TORNEO</a><br /> <br />
		<a href="classifica"><img src={coppa} alt="una coppa" /></a>
	</p>
{:else}
	<p>
		<a href="accesso" class="accedi-color">Accedi</a><br />
		<a class="tasto-rosso" href="/modalità-gioco">CONTA PUNTI</a><br />
		<a class="tasto-blu" href="aggiungi_partita">AGGIUNGI PARTITA</a> <br />
		<a class="tasto-rosso" href="crea_torneo">CREA TORNEO</a><br />
		<a href="classifica"><img src={coppa} alt="una coppa" /></a>
	</p>
{/if}

<style>
	p {
		text-align: center;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #000000;
		margin-bottom: 80px;
	}

	button,
	a {
		text-align: center;
		cursor: pointer;
		border: none;
		outline: none;
		text-decoration: none;
		color: #000000;
	}

	.accedi-color {
		color: dodgerblue;
	}

	.tasto-rosso {
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 15px 40px;
		border-radius: 45px;
		display: inline-block;
		text-align: center;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #000000;
		background-color: orangered;
	}

	.tasto-blu {
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 15px 40px;
		border-radius: 45px;
		display: inline-block;
		text-align: center;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #000000;
		background-color: cornflowerblue;
	}

	div {
		margin-top: 20px;
		text-align: center;
	}

	img {
		width: 300px;
		height: auto;
		margin: 0 auto;
		display: flex;
	}

	a {
		color: blue;
		text-decoration: none;
		font-weight: bold;
		margin-top: 10px;
		display: inline-block;
		text-align: center;
	}
</style>
