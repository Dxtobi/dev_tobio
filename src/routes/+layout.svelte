<script>
	import { scrollOnO } from './../lib/ui-js/animat_o.js';
	
	import { animate_mouse, startMouseEffect } from './../lib/ui-js/mouseeffect.js';
  import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import 'iconify-icon';
	onMount(()=>{
		startMouseEffect();
		animate_mouse()
		scrollOnO()
	})
	
	</script>

<div class="app overflow-hidden">
	<Header />

	<main >
		<slot />
	</main>

	<footer>
		
	</footer>
</div>


<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>
<div class="mouse-div"></div>






<style>
.mouse-div{
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: #dc2626;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 50;
	/* mix-blend-mode: difference; */
}


</style>
