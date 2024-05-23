<script>
  import { slide } from "svelte/transition";
  import FloatLogos from "./FloatLogos.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import Testcomp from "./Testcomp.svelte";
  import { onMount } from "svelte";

  function downloadFile() {
    const link = document.createElement("a");
    link.href = "/jao.pdf"; // Path to the PDF file relative to the root of the project
    link.download = "jao.pdf"; // Set the downloaded file name
    link.click();
  }

  let visitCount = "000";

  onMount(async () => {
    try {
      // Update the visit count
      await fetch("/api/visits", { method: "POST" });

      // Fetch the updated visit count
      const updatedResponse = await fetch("/api/visits");
      const updatedData = await updatedResponse.json();
      visitCount = updatedData.visit_count;
    } catch (error) {
      console.error("Error fetching or updating visit count:", error);
    }
  });
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

<section
  class=" flex justify-center items-center w-full min-h-screen relative"
  id="hero"
>
  <button
    class="rounded-full shadow-2xl py-1 px-10 text-white bg-gradient-to-r from-red-500 to-red-300 w-fit mt-2 absolute left-10 bottom-10"
    on:click={downloadFile}
    transition:slide={{ duration: 880, axis: "y" }}>Get My CV</button
  >
  <div class="alternative_bg_box"></div>
  <div class="bg-2-trans"></div>
  <!-- <GridBackground/> -->
  <div class="relative overflow-visible flex justify-center items-center">
    <div class="overflow-visible">
      <div
        class="text-[9rem] md:text-[15rem] text-shadow_ items-center overflow-visible"
      >
        <div
          style="line-height: 1;"
          class="pacifico-regular text-red-600 text-[5rem]"
          id="sit1"
        >
          <SectionTitle texts="DEV-." />
        </div>
        <Testcomp />
        <div class="relative overflow-visible">
          <div
            style="line-height: 1;"
            class="righteous-regular flex text-white overflow-visible"
          >
            <div class="tobi_place">T</div>
            <div class="tobi_place">O</div>
            <div class="tobi_place" id="sit1">B</div>
            <div class="tobi_place">i</div>
          </div>
          <div
            id="top-banner"
            style="line-height: 1; color:transparent"
            class="righteous-regular flex absolute hero_text_animation top-0"
          >
            <div class="">T</div>
            <div class="">O</div>
            <div class="">B</div>
            <div class="">i</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-[-10px] right-1 text-2xl">
        <p class="text-red-600 pacifico-regular">Portfolio</p>
      </div>
    </div>
  </div>

  <div class="play-regular absolute font-semibold top-[86px] left-[150px]">
    <span class="">VISITS:</span>
    <span class="text-red-600">{visitCount}</span>
  </div>

  <div
    id="carousel-fog"
    class=" absolute md:left-[100px] left-0 w-[500px] bottom-[100px] p-1 rounded-lg uppercase play-bold overflow-hidden"
  >
    <div class="relative w-fit overflow-visible">
      <FloatLogos from="left" speed="40s" />
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
    content: "";
    display: block;
    position: absolute;
    background: linear-gradient(89deg, white, #ffffffe8, transparent);
    height: 100%;
    width: 20%;
    top: 0;
    left: 0;
  }

  #top-banner {
    overflow: visible !important;
  }

  #top-banner > div {
    transition: 150ms;
    overflow: visible;
    text-shadow: 4px 4px 0px #000000;
    color: white;
    -webkit-text-stroke: 2px #ea5656;
    background-clip: text;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #top-banner > div:hover {
    overflow: visible !important;
    text-shadow:
      -20px -20px 0px #dc2626,
      0px 0px 0px #ffffff,
      14px 20px 0px #000 !important;
    transform: scale(1.05);
    color: transparent;
    transition: 250ms;
    -webkit-text-stroke: 2px #dc2626;
    animation: shake 200ms ease-out forwards;
  }
</style>
