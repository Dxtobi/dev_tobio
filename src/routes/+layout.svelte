<script>
	import MainBar from '../lib/components/menus/MenuBar.svelte';

	import Mouse from './../lib/components/Mouse.svelte';
	import { scrollOnO } from './../lib/ui-js/animat_o.js';

	import { animate_mouse, startMouseEffect } from './../lib/ui-js/mouseeffect.js';
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import './animations.css';

	onMount(() => {
		startMouseEffect();
		animate_mouse();
		scrollOnO();
	});
</script>

<section class="app overflow-hidden">
	<Header />
	<Mouse />

	<main id="main">
		<slot />
	</main>

	<footer>
		<MainBar></MainBar>
	</footer>
</section>

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
