<script>
    import Menu_Md from './Menu_Md.svelte';

    let open_menu = $state(false);
    //let small_menu = $state(false);

    const side_menu = {
        show_mouse: true,
        show_animation: true,
    };
    const toggle = () => (open_menu = !open_menu);
    // const toggle_small_menu = () => (small_menu = !small_menu);
</script>

<button
    id="nav-move"
    class={`  ${
        open_menu ? 'rotate-180 ' : ''
    } fixed right-10 bottom-10 text-xl grid place-content-center hover:text-[#dc2626d4] transition-all gap-1 z-[200]`}
    on:click={toggle}
>
    <span class={`w-[50px] h-2 bg-red-600 ${open_menu ? '-rotate-45' : ''} `}></span>
    <span class={`w-[50px] h-2 bg-red-600 ${open_menu ? '-rotate-[390deg]  -translate-x-[100rem]' : ''} `}></span>
    <span class={`w-[50px] h-2 bg-red-600 ${open_menu ? 'rotate-45 max-sm -translate-y-[23px]' : ''} `}></span>
</button>
{#if open_menu}
    <Menu_Md {toggle}></Menu_Md>
{/if}

<style>
    #nav-move > span {
        transition: 1s;
        border-radius: 60px;
        /* transform-origin: center; */
    }

    #nav-move {
        transition: 1s;
        /* transform-origin: center; */
    }
</style>
