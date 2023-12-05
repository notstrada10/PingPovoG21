<script>
	import Menu from '$lib/Menu.svelte';
</script>

<Menu></Menu>
<p>CLASSIFICA</p>

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
</style>
