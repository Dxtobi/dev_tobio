<script>
    import { onMount } from 'svelte';

    /**@type {string}**/
    export let texts;
    const arr_text = texts.split('');
</script>

<div class="flex overflow-visible text-entry-parent">
    {#each arr_text as text, i}
        {#if text === '*'}
            <div
                style={`--time-index:${i + 1}s`}
                class={`animate-entry-text ${text === 'O' && ' text-gray-900'} relative h-[100px] w-[70px] `}
            >
                <img src="/SVG/assstand.svg" class=" absolute h-[100px] z-30 shake" alt="" />
            </div>
        {:else if text === '?'}
            <div
                style={`--time-index:${i + 1}s`}
                class={`animate-entry-text ${text === 'O' && ' text-gray-900'} relative h-[100px] w-[70px] `}
            >
                <img
                    src="/SVG/fly.svg"
                    class=" absolute h-[100px] z-30 hover:-translate-y-5"
                    style="transition:100ms"
                    alt=""
                />
            </div>
        {:else if text === '-'}
            <div
                style={`--time-index:${i + 1}s`}
                class={`animate-entry-text ${text === 'O' && ' text-gray-900'} relative h-[100px] w-[70px] `}
            >
                <img
                    src="/boyx.svg"
                    class=" absolute h-[100px] z-30 hover:translate-y-5"
                    style="transition:100ms"
                    alt=""
                />
            </div>
        {:else}
            <span style={`--time-index:${i + 1}s`} class={`animate-entry-text ${text === 'O' && ' text-gray-900'} `}>
                {text}
            </span>
        {/if}
    {/each}
</div>

<style>
    .text-entry-parent > d {
        overflow: visible;
    }
</style>
