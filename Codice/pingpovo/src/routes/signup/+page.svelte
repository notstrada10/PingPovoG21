<script>
  import { goto } from "$app/navigation";
  import { signup } from "$lib/api";
  let username = "";
  let email = "";
  let phone = "";
  let password = "";
</script>

<div class="flex flex-col gap-4 p-8">
  <h1 class="text-3xl">REGISTRAZIONE</h1>
  <input
    type="text"
    placeholder="Nome utente"
    class="input input-bordered w-full"
    bind:value={username}
  />
  <input
    type="text"
    placeholder="Email"
    class="input input-bordered w-full"
    bind:value={email}
  />
  <input
    type="text"
    placeholder="Telefono"
    class="input input-bordered w-full"
    bind:value={phone}
  />
  <input
    type="text"
    placeholder="Password"
    class="input input-bordered w-full"
    bind:value={password}
  />
  <button
    class="btn btn-primary"
    on:click={async () => {
      const res = await signup(email, password, phone, username);
      if (res) {
        goto("/");
      } else {
        password = "";
      }
    }}
  >
    Conferma
  </button>
</div>
