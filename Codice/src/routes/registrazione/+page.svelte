<script>
	import Menu from '$lib/Menu.svelte';
	import { supabase } from '../../supabase';
	let email = '';
	let password = '';

	async function handleRegister() {
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password
			});

			if (error) {
				console.error(error.message);
			} else {
				console.log('Registration successful:', data.user?.email);
				// Redirect or perform additional actions after registration
			}
		} catch (error) {
			console.error('Error during registration.');
		}
	}
</script>

<Menu></Menu>

<p>
	REGISTRAZIONE<br />
</p>

<form on:submit|preventDefault={handleRegister}>
	<p>
		<label>
			<input
				type="email"
				bind:value={email}
				class="tasto-rosso input-field"
				placeholder="Email"
			/><br />
		</label>
		<label>
			<input
				type="password"
				bind:value={password}
				class="tasto-rosso input-field"
				placeholder="Password"
			/><br />
		</label>

		<button type="submit" class="tasto-blu">CONFERMA</button>
	</p>
</form>

<style>
	p {
		text-align: center;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #000000;
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
	.input-field::placeholder {
		color: #ff958d;
	}

	.tasto-rosso {
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 15px 40px;
		border-radius: 45px;
		border: none;
		display: inline-block;
		text-align: left;
		font-size: 64px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
		color: #ff958d;
		background-color: #ff3131;
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
		color: blue;
		background-color: cornflowerblue;
	}

	/*ciao*/
</style>
