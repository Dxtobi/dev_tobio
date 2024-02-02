<script>
	import FloatLogos from './FloatLogos.svelte';
  import Loader_1 from "./Loader_1.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import { startMouseEffect } from "./../../ui-js/mouseeffect.js";
</script>

<!-- <div
  id="loader_hero"
  class="fixed flex justify-center items-center w-full h-screen left-0 top-0 z-20 bg-orang-c bg-black righteous-regular"
>
  <div class="h-[210px] w-[210px] relative">
    <div class="grid grid-cols-2 text-[5rem] h-[200px] w-[200px] relative">
   
      <div class="a w-[100px] max-h-fit">
        <div>T</div>
     
      </div>
      <div class="b  w-[100px] max-h-fit">
        <div>O</div>
       
       
      </div>
      <div class="c  w-[100px] max-h-fit">
        <div>B</div>
      
        
      </div>
      <div class="d  w-[100px] max-h-fit">
        <div>i</div>
      
       
      </div>
    </div>
    <span class="span-1"></span>
    <span class="span-2"></span>
    <span class="span-3"></span>
    <span class="span-4"></span>
  </div>
</div> -->

<div class="diarection-container-btn fixed right-10 z-30 bottom-10 text-xl">
  <button class="diarection-button"> &uarr;</button>
  <button class="diarection-button"> &darr;</button>
</div>
<section
  class=" flex justify-center items-center w-full min-h-screen relative"
  id="hero_"
>
  <div class="alternative_bg_box"></div>
  <div class="bg-2-trans"></div>
  <!-- <GridBackground/> -->
  <div class="relative overflow-visible flex justify-center items-center">
   <div class="overflow-visible">
    <div class="text-[9rem] md:text-[15rem] text-shadow_  items-center">
    <div style="line-height: 1;" class="pacifico-regular text-red-600 text-[5rem]" id="sit1"><SectionTitle texts='DEV-.' /></div>
    <div class="relative overflow-visible">
      <div style="line-height: 1;" class="righteous-regular flex text-white overflow-visible"><div class="tobi_place">T</div><div class="tobi_place">O</div>
      <div class="tobi_place " id="sit1">B</div><div class="tobi_place">i</div></div>
      <div style="line-height: 1; color:transparent" class="righteous-regular flex absolute hero_text_animation top-0 "><div class="">T</div><div class="">O</div><div class="">B</div><div class="">i</div></div>
    </div>
  </div>
  
  <div class="absolute bottom-[-10px] right-1 text-2xl ">
    <p class="text-red-600 pacifico-regular">Portfolio</p>
  </div>
   </div>
  </div>

  <div class="play-regular absolute font-semibold top-[86px] left-[150px]">
    <span class="">VISITS:</span>
    <span class="text-red-600">290</span>
  </div>

  <div id='carousel-fog' class=" absolute md:left-[100px]  left-0 w-[500px] bottom-[100px] p-1 rounded-lg uppercase play-bold ">
    <div class="relative w-fit overflow-visible ">
    <FloatLogos/>
    </div>
  </div>
</section>

<!-- <div class='absolute righteous-regular text-[10rem] text-shadow_  opacity-0' id='tobi_'>O</div> -->
<style>
  .animate-floaters p {
    line-height: 0;
    /* background: #000; */
  }

  #tobi_ {
    transform: translate(561.375px, 1672.5px);
    transition: transform 0.5s ease-out;
    transform-origin: 561.375px, 1672.5px;
  }

  #carousel-fog::after {
    z-index: 30;
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(89deg, white, #ffffffe8, transparent);
    height: 100%;
    width: 20%;
    top: 0;
    left: 0;
}

#carousel-fog::before {
    z-index: 30;
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(270deg, white, #ffffffe8, transparent);
    height: 100%;
    width: 20%;
    top: 0;
    right: 0;
    transition: 1s ease-in-out;
}
</style>
