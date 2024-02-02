<script>
/**@type {string}**/
export let texts
const arr_text =texts.split('');

</script>



  <div class="flex">
    {#each arr_text as text, i}
    {#if text === "*"}
    <div style={`--time-index:${i+1}s`} class={`animate-entry-text ${text==="O"&&' text-gray-900'} relative h-[100px] w-[70px] `}>
        <img src="/SVG/assstand.svg"  class=" absolute h-[100px] z-30 shake"alt='' />
    </div>
    {:else if text === "?"}
    <div style={`--time-index:${i+1}s`} class={`animate-entry-text ${text==="O"&&' text-gray-900'} relative h-[100px] w-[70px] `}>
        <img src="/SVG/fly.svg"  class=" absolute h-[100px] z-30 hover:-translate-y-5" style="transition:100ms" alt='' />
    </div>
    {:else if text === "-"}
    <div style={`--time-index:${i+1}s`} class={`animate-entry-text ${text==="O"&&' text-gray-900'} relative h-[100px] w-[70px] `}>
        <img src="/boyx.svg"  class=" absolute h-[100px] z-30 hover:translate-y-5" style="transition:100ms" alt='' />
    </div>
    {:else}
    <div style={`--time-index:${i+1}s`} class={`animate-entry-text ${text==="O"&&' text-gray-900'} `}>{text}</div>
    {/if}
{/each}
  </div>
