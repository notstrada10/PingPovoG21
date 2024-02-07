<script lang="ts">
  import "./styles.css";
  import home from "$lib/images/home.png";
  import { page } from "$app/stores";
</script>

<div class="flex justify-center align-middle">
  <div class="flex flex-col max-w-xl" style="height: 100dvh; width: 100dvw;">
    {#if !$page.route.id?.includes("contapunti")}
      <div class="flex gap-8 p-2">
        {#if $page.route.id != "/"}
          <a href="/" class="">
            <img src={home} class="h-8" alt="trofeo" />
          </a>
        {/if}
        {#if $page.route.id != "/logout"}
          <a href="/logout" class="">Logout</a>
        {/if}
      </div>
    {/if}
    <div class="w-full flex-grow">
      <slot />
    </div>
  </div>
</div>
