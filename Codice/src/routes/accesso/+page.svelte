<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	import { supabase } from '../../supabase';

	let email = '';
	let password = '';

	async function handleLogin() {
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password
			});

			if (error) {
				console.error(error.message);
			} else {
				console.log('Login successful:', data.user?.email);
				// Redirect or perform additional actions after login
			}
		} catch (error: any) {
			console.error('Error during login:', error.message);
		}
	}
</script>

<Menu></Menu>
<form on:submit|preventDefault={handleLogin}>
	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>
	<label>
		Password:
		<input type="password" bind:value={password} />
	</label>
	<button type="submit">Login</button>
</form>

<p>
	Nome utente<br />
	Password<br />
	Password dimenticata?<br />
	ACCEDI<br />
	Nuovo utente? <a href="registrazione" class="accedi-color">Registrati qui</a>
</p>

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
