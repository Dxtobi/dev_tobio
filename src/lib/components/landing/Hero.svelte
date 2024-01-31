<script>
  import Loader_1 from "./Loader_1.svelte";

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
    <div style="line-height: 1;" class="pacifico-regular text-red-600 text-[5rem]">DEV. </div>
    <div class="relative overflow-visible">
      <div style="line-height: 1;" class="righteous-regular flex text-white overflow-visible"><div class="tobi_place">T</div><div class="tobi_place">O</div>
      <div class="relative overflow-visible"><div class="tobi_place " id="sit-1">B</div></div><div class="tobi_place">i</div></div>
      <div style="line-height: 1; color:transparent" class="righteous-regular flex absolute hero_text_animation top-0 "><div class="">T</div><div class="">O</div><div class="">B</div><div class="">i</div></div>
    </div>
  </div>
  
  <div class="absolute bottom-[-10px] right-1 text-2xl ">
    <p class="text-red-600 pacifico-regular">Portfolio</p>
  </div>
   </div>
  </div>

  <div class="play-regular absolute font-semibold top-[150px] left-[150px]">
    <span class="">VISITS: </span>
    <span class="text-red-600">290</span>
  </div>
  <div class="side-hover uppercase play-bold">
    <div class="animate-floaters">
      <p><span>web</span> <span class="text-red-600">DEVELOPER</span></p>
      <p><span class="text-red-600">APP</span> <span>developer</span></p>
      <p>
        <span>Data</span>
        <span class="text-red-600"
          >analyst <span>
            <span class="pacifico-regular"> 30%</span></span
          ></span
        >
      </p>
      <p><span class="text-red-600">GRAPHIC</span> <span>DESIGNER</span></p>
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
</style>
