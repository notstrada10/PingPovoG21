<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import servizio from "$lib/images/servizio.png";
  let color1 = "";
  let text1 = "";
  let color2 = "";
  let text2 = "";
  let punti1 = 0;
  let punti2 = 0;

  let turnosopra = true;
  let ended = false;
  let max_punti = 0;
  $: {
    max_punti = parseInt($page.params.max);
  }

  let punti_switch = 0;
  $: {
    punti_switch = $page.params.max == "11" ? 2 : 5;
  }

  $: {
    if ($page.params.mod == "libera") {
      color1 = "#FF3131";
      color2 = "#5271FF";
      text1 = "black";
      text2 = "black";
    } else {
      color1 = "white";
      color2 = "black";
      text1 = "black";
      text2 = "white";
    }
  }
  function calcola_turno() {
    if (punti1 >= max_punti - 1 && punti2 >= max_punti - 1) {
      turnosopra = !turnosopra;
    } else {
      turnosopra = (punti1 + punti2) % (2 * punti_switch) < punti_switch;
    }
  }

  function modifca_punti(delta: number, sopra: boolean) {
    if (sopra) {
      punti1 = Math.max(punti1 + delta, 0);
    } else {
      punti2 = Math.max(punti2 + delta, 0);
    }
    if (
      (punti1 >= max_punti || punti2 >= max_punti) &&
      Math.abs(punti1 - punti2) >= 2
    ) {
      ended = true;
    }
    calcola_turno();
  }
</script>

<div class="flex flex-col h-full w-full justify-center items-center">
  <h1
    class="w-full text-center text-3xl uppercase p-4 border-b-2 border-black"
    style={`background-color: ${color1}; color: ${text1}`}
  >
    {$page.params.mod}
  </h1>
  <button
    disabled={ended}
    class="w-full flex-grow flex justify-center items-center text-[80px]"
    style={`background-color: ${color1}; color: ${text1}`}
    on:click={() => modifca_punti(1, true)}
  >
    {punti1}
  </button>
  <div class="relative">
    <button
      class="btn btn-accent w-36 absolute"
      style="transform: translate(-50%, -50%);"
      on:click={() => {
        if ($page.params.mod == "libera") {
          goto(`/`);
        } else {
          goto(`/aggiungipartita-${punti1}-${punti2}`);
        }
      }}
    >
      FINE PARTITA
    </button>
  </div>
  <div class="relative w-full left-0">
    <button
      disabled={ended}
      on:click={() => modifca_punti(-1, true)}
      class="btn btn-accent absolute rounded-none bg-white border-gray-700 border-4 text-3xl"
      style="transform: translate(0, -100%);">-</button
    >
    <button
      disabled={ended}
      on:click={() => modifca_punti(-1, false)}
      class="btn btn-accent absolute rounded-none bg-white border-gray-700 border-4 text-3xl"
      style="transform: translate(0, 0);">-</button
    >
  </div>
  <div class="relative w-full flex justify-end">
    <div
      class=" absolute transition-all p-4"
      style={`transform: translate(0, ${turnosopra ? "-100%" : "0"});`}
    >
      <img class="h-16" src={servizio} />
    </div>
  </div>
  <button
    disabled={ended}
    class="w-full flex-grow flex justify-center items-center text-[80px]"
    style={`background-color: ${color2}; color: ${text2}`}
    on:click={() => modifca_punti(1, false)}
  >
    {punti2}
  </button>
</div>
