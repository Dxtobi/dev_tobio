<script>
    import { backInOut, linear } from 'svelte/easing';
    const { toggle } = $props();

    let springy = false;

    let options = $state({ duration: springy ? 2000 : 400, easing: springy ? backInOut : linear, times: 0.3 });

    function spin(node, options) {
        const { times = 1 } = options;
        return {
            ...options,
            // The value of t passed to the css method
            // varies between zero and one during an "in" transition
            // and between one and zero during an "out" transition.
            css(t) {
                // Svelte takes care of applying the easing function.
                const degrees = 155 * times; // through which to spin
                return `transform:  translate(0%, 0%) rotate(${t * degrees}deg); opacity:0.4`;
            },
        };
    }
</script>

<div class="circle" transition:spin={options}>
    <div class="inner-strip is-1">
        <div class="first">
            <a onclick={toggle} href="#projects" class="font-bold text-[#5f5e5e] hover:text-[#dc2626]"> Projects</a>
        </div>
        <div class="second">
            <div class=" w-4 h-4 bg-rose-500 rounded-full translate-x-[-50%]"></div>
        </div>
    </div>
    <div class="inner-strip is-2">
        <div class="first">
            <a onclick={toggle} href="#about" class="font-bold text-[#5f5e5e] hover:text-[#dc2626] text-2xl">About</a>
        </div>
        <div class="second">
            <div class=" w-4 h-4 bg-rose-500 rounded-full translate-x-[-50%]"></div>
        </div>
    </div>
    <div class="inner-strip is-3">
        <div class="first">
            <a onclick={toggle} href="#testimony" class="font-bold text-[#5f5e5e] hover:text-[#dc2626]">Testimonials</a>
        </div>
        <div class="second">
            <div class=" w-4 h-4 bg-rose-500 rounded-full translate-x-[-50%]"></div>
        </div>
    </div>
    <div class="inner-strip is-4">
        <div class="first">
            <a onclick={toggle} href="#hero" class="font-bold text-[#5f5e5e] hover:text-[#919090]">Top</a>
        </div>
        <div class="second">
            <div class=" w-4 h-4 bg-rose-500 rounded-full translate-x-[-50%]"></div>
        </div>
    </div>
    <div class="inner-strip is-5">
        <div class="first">
            <a onclick={toggle} href="#contact" class="font-bold text-[#5f5e5e] hover:text-[#919090]">Contact</a>
        </div>
        <div class="second">
            <div class=" w-4 h-4 bg-rose-500 rounded-full translate-x-[-50%]"></div>
        </div>
    </div>
</div>
<button href="/" onclick={toggle} class="circle-1 top-0 left-0"></button>

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
        transform: rotate(10deg);
    }

    .is-3 {
        transform: rotate(-10deg);
    }
    .is-4 {
        transform: rotate(20deg);
    }

    .is-5 {
        transform: rotate(-20deg);
    }
    .first {
        width: 50%;
        padding: 10px;
        font-size: 2rem;
        overflow: visible;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 31px;
    }
    .second {
        width: 50%;
        overflow: visible;
        display: flex;
        justify-content: inherit;
        align-items: center;
    }
</style>
