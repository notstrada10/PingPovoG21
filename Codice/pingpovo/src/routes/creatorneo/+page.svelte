<script lang="ts">
  let second_step = false;
  import { credentials } from "$lib/store";
</script>

<div class="flex flex-col gap-4 p-8">
  {#if !second_step}
    <h1 class="text-3xl uppercase">Crea torneo</h1>
    <input
      type="text"
      placeholder="Giocatore 1"
      class="input input-bordered w-full"
      value={$credentials?.user || ""}
    />
    <input
      type="text"
      placeholder="Giocatore 2"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 3"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 4"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 5"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 6"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 7"
      class="input input-bordered w-full"
    />
    <input
      type="text"
      placeholder="Giocatore 8"
      class="input input-bordered w-full"
    />
    <button
      class="btn btn-primary"
      on:click={() => {
        second_step = true;
      }}
    >
      Scegli data e ora
    </button>
  {:else}
    <input type="date" placeholder="Data" class="input input-bordered w-full" />
    <input type="time" placeholder="Ora" class="input input-bordered w-full" />
    <button class="btn btn-primary"> Crea </button>{/if}
</div>
