<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let scrolling = true;
  //   onMount(() => {
  //     document.getElementById("main-comp").addEventListener("scrollend", (e) => {
  //       //   console.log(e);
  //       scrolling = false;
  //     });

  //     document.getElementById("main-comp").addEventListener("", (e) => {
  //       //   console.log(e);
  //       scrolling = false;
  //     });
  //   });
</script>

{#if scrolling}
  <header class="" in:fly={{ x: 0, y: -100 }} out:fly={{ x: 0, y: -100 }}>
    <nav class="header">
      <div class="lobster-regular text-[2rem] w-[100px]">Tobi</div>

      <div class="flex gap-4 items-center overflow-visible">
        <button class="">
          <iconify-icon icon="line-md:twitter-x"></iconify-icon>
        </button>
        <a href="/">
          <iconify-icon icon="mdi:github"></iconify-icon>
        </a>
      </div>
    </nav>
  </header>
{/if}

<style>
  .inner-strip {
    width: 100%;
    height: 70px;
    /* transform-origin: 50% 0; */

    position: absolute;
    top: 47%;
    right: 50%;
    transform: translate(0, 0%);
    transform-origin: right;
    display: flex;
    overflow: visible;
  }

  .is-2 {
    transform: rotate(20deg);
  }

  .is-3 {
    transform: rotate(-20deg);
  }
  .first {
    width: 50%;
    padding: 10px;
    font-size: 3rem;
    overflow: visible;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .second {
    width: 50%;
    overflow: visible;
    display: flex;
    justify-content: inherit;
    align-items: center;
  }
</style>
