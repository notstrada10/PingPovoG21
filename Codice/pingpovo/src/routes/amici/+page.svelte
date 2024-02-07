<script lang="ts">
  export let data;
</script>

<div class="h-full w-full p-8 flex flex-col gap-8">
  <h1 class="text-3xl uppercase">Amici</h1>

  <div class="grid grid-cols-3 gap-4">
    <p class="col-span-1">Nickname</p>
    <p class="col-span-1">Punti</p>
    <p class="col-span-1">Numero</p>
    {#each data.amici as amico}
      <a class="col-span-1 link" href={`/profilo-${amico.username}`}>
        {amico.username}
      </a>
      <p class="col-span-1">{amico.PP}</p>
      <p class="col-span-1">{amico.numero}</p>
    {/each}
  </div>
</div>
