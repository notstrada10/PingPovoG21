<script>
  import { goto } from "$app/navigation";
  import { logout } from "$lib/api";
</script>

<div class="flex flex-col gap-4 p-8">
  <h1 class="text-3xl uppercase">Logout</h1>

  <button
    on:click={() => {
      logout();
      goto("/");
    }}
    class="btn btn-primary"
  >
    Logout
  </button>
</div>
