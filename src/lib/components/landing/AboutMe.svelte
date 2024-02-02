<script>
	import FloatLogos from './FloatLogos.svelte';
  // import GridBackground from "../GridBackground.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  

</script>

<section class="min-h-screen relative" style="background: linear-gradient(349deg, #33333347, #888888);">



<div class="absolute z-30 top-[150px] right-0 md:right-[10px]"> <FloatLogos/></div>
  <div>
    <h2 class="text-[5rem] absolute font-bold top-20 left-4 text-white flex flex-col" style="line-height: normal;" id="sit3">
      <div> <SectionTitle texts='ABOUT' /></div>
      <div style="  -webkit-text-stroke: 1px #dc2626; color:#dc2626" class=" z-20">
      <SectionTitle texts='ME.' />
      </div>
    </h2>
   
  </div>
  <div>
    <img
      alt=""
      src="/SVG/me-1.svg"
      class=" md:w-1/2 object-cover object-top h-full z-[11] absolute"
      style=" transform: translate(20%, 0px); filter: grayscale(1);"
    />
  </div>
  
  <div class="h-1/2 w-full">
    <div
      class="absolute w-full h-[70%] md:h-[45%] z-20 bottom-0 backdrop-blur-[30px] grid md:grid-cols-3">
      <div  class="flex flex-col bg-[#1e1e1e] text-white">
        <h2 class="font-bold" style="font-family:  sans-serif;">
          <span class="text-[20px]">Web / Mobil</span><br /><span
            class=" text-[40px] text-transparent"  style="  -webkit-text-stroke: 1px #fff;"> Developer</span>
        </h2>
      </div>
      <div class="flex flex-col bg-[#dc2626] text-white">
        <h2
          class="font-bold"
          style="font-family:  sans-serif;"
        > <span class="text-[20px] text-white"> In Progress</span><br />
          <span
            class=" text-[40px] text-transparent"
            style="  -webkit-text-stroke: 1px #fff;"
            >UI / UX
          </span>
          <span class="text-[30px]"> Designer</span>
        </h2>
        
      </div>
      <div class="flex flex-col text-white bg-white">
        <h2
          class="font-bold"
          style="font-family:  sans-serif;"
        >
          <span class="text-[20px] text-[#1e1e1e]"> In Progress</span><br />
          <span
            class="font-bold text-[40px] text-transparent"
            style="  -webkit-text-stroke: 1px #1e1e1e;"
            >Data Analyst
          </span>
        </h2>
        
      </div>
    </div>
  </div>
</section>

<style>
  .flex-col {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px;
  }
</style>
