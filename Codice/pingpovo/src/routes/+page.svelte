<script>
  import { goto } from "$app/navigation";
  import { credentials } from "$lib/store";
  import classifica from "$lib/images/classifica.png";
</script>

<div class="h-full w-full flex flex-col gap-8 p-8">
  <h1 class="text-center w-full text-5xl">
    {#if $credentials}
      <a class="link" href={`/profilo-${$credentials.username}`}>
        {$credentials.username}
      </a>
    {:else}
      <a href="/login" class="link">Accedi</a>
    {/if}
  </h1>
  <a href="/sceltagioco" class="btn rounded-3xl bg-red-600 text-black">
    CONTA PUNTI
  </a>
  <button
    disabled={!$credentials}
    on:click={() => {
      goto("/aggiungipartita-0-0");
    }}
    class="btn rounded-3xl bg-blue-600 text-black flex flex-col"
  >
    <span>AGGIUNGI PARTITA</span><span>Solo utenti registrati</span>
  </button>
  <a href="/creatorneo" class="btn rounded-3xl bg-red-600 text-black">
    CREA TORNEO
  </a>
  <div class="flex justify-center">
    <a href="/classifica">
      <img src={classifica} class="h-44" alt="trofeo" />
    </a>
  </div>
</div>
