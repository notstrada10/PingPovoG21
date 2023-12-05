<script>
	let mod_partita = 21;
	let classificata = false;

	function libera_11() {
		mod_partita = 11;
		classificata = false;
	}

	function libera_21() {
		mod_partita = 21;
		classificata = false;
	}

	function classificata_11() {
		mod_partita = 11;
		classificata = true;
	}

	function classificata_21() {
		mod_partita = 21;
		classificata = true;
	}
</script>

<a href="/contapunti">
	<button class="tasto-rosso" on:click={libera_11}>PARTITA LIBERA A 11</button>
	<button on:click={libera_21}>PARTITA LIBERA A 21</button>
	<button on:click={classificata_11}>CLASSIFICATA A 11</button>
	<button on:click={classificata_21}>CLASSIFICATA A 21</button>
</a>

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
