<script>
  import { goto } from "$app/navigation";
  import { login } from "$lib/api";

  let user = "";
  let password = "";
</script>

<div class="flex flex-col gap-4 p-8">
  <h1 class="text-3xl uppercase">Login</h1>

  <input
    type="text"
    placeholder="Username"
    class="input input-bordered w-full"
    bind:value={user}
  />
  <input
    type="text"
    placeholder="Password"
    class="input input-bordered w-full"
    bind:value={password}
  />
  <a href="/recupero" class="link">Password dimenticata?</a>

  <button
    on:click={async () => {
      const res = await login(user, password);
      if (res) {
        goto("/");
      } else {
        password = "";
      }
    }}
    class="btn btn-primary"
  >
    Accedi
  </button>

  <a href="/signup" class="link">Nuovo utente? Registrati qui</a>
</div>
