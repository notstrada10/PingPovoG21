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
			}
		} catch (error: any) {
			console.error('Error during login:', error.message);
		}
	}
</script>

<p>
	ACCESSO<br />
</p>

<Menu></Menu>
<form on:submit|preventDefault={handleLogin}>
  <label class="form-label">
    <span class="label-text">Email:</span>
    <input type="email" bind:value={email} class="input-field email-input" placeholder="Email" />
  </label>
  <label class="form-label">
    <span class="label-text">Password:</span>
    <input type="password" bind:value={password} class="input-field password-input" placeholder="Password" />
  </label>
  <button type="submit">Conferma</button>
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
	  margin-bottom: 10px;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .label-text {
    font-size: 24px;
  }

  .input-field {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 15px 40px;
    border-radius: 45px;
    border: none;
    display: inline-block;
    text-align: left;
    font-size: 24px;
    color: #ff958d;
	font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
    background-color: #ff3131;
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 40px;
    border-radius: 45px;
    display: inline-block;
    font-size: 24px;
    color: blue;
	font-family: Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
    background-color: cornflowerblue;
  }
  </style>
  