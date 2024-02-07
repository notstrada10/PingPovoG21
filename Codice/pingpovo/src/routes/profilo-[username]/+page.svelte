<script lang="ts">
  import { aggiungi_amico } from "$lib/api";
  export let data;
  import { credentials } from "$lib/store.js";
</script>

<div class="h-full w-full p-8 flex flex-col gap-8">
  {#if data.profilo}
    <h1 class="text-3xl uppercase">Profilo</h1>

    <p class="">Username {data.profilo.username}</p>
    <p class="">Punti Povo {data.profilo.PP}</p>
    <!-- <p class="">Season Ranking {data.profilo.sr}</p> -->
    <!-- <p class="">Best Ranking {data.profilo.br}</p> -->

    <a href="/amici" class="btn btn-accent">Lista Amici</a>
    {#if $credentials && data.profilo.username != $credentials?.username}
      <!-- {#if data.profilo.amico} -->
      <button class="btn btn-error">Rimuovi amico</button>
      <!-- {:else} -->
      <button
        class="btn btn-primary"
        on:click={() => {
          // @ts-ignore
          aggiungi_amico(data.profilo.username, $credentials.username);
        }}
      >
        Aggiungi amico
      </button>
      <!-- {/if} -->
    {/if}
  {/if}
</div>
