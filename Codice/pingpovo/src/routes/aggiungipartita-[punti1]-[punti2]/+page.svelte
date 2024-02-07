<script>
  import { credentials } from "$lib/store";
  import { page } from "$app/stores";
  import { aggiungi_partita } from "$lib/api";
  import { goto } from "$app/navigation";

  let winner = "";
  let loser = "";
</script>

<div class="flex flex-col gap-4 p-8">
  {#if !$credentials}
    <h1 class="text-3xl uppercase">Aggiungi partita</h1>
    <input
      type="text"
      placeholder="Vincitore"
      class="input input-bordered w-full"
      bind:value={winner}
    />
    <input
      type="text"
      placeholder="Punteggio"
      class="input input-bordered w-full"
      value={$page.params.punti1}
    />
    <input
      type="text"
      placeholder="Perdente"
      class="input input-bordered w-full"
      bind:value={loser}
    />
    <input
      type="text"
      placeholder="Punteggio"
      class="input input-bordered w-full"
      value={$page.params.punti2}
    />

    <button
      class="btn btn-primary"
      on:click={async () => {
        const res = await aggiungi_partita(winner, loser);
        if (res) {
          goto("/");
        } else {
        }
      }}
    >
      Salva
    </button>
  {:else}
    <p>Devi effettuare il <a href="/login" class="link">login</a></p>
  {/if}
</div>
