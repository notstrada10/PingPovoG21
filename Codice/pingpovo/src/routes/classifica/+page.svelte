<script lang="ts">
  export let data;
</script>

<div class="h-full w-full p-8 flex flex-col gap-8">
  <h1 class="text-3xl uppercase">Classifica</h1>

  <div class="grid grid-cols-3 gap-4">
    <p class="col-span-1">Rank</p>
    <p class="col-span-1">Username</p>
    <p class="col-span-1">Punti</p>
    {#each data.classifica as posizione, i}
      <p class="col-span-1">{i + 1}</p>
      <a class="col-span-1 link" href={`/profilo-${posizione.username}`}>
        {posizione.username}
      </a>
      <p class="col-span-1">{posizione.PP}</p>
    {/each}
  </div>
</div>
