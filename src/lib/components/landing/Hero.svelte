<script>
	import { gsap } from 'gsap';
  import { slide, fly } from "svelte/transition";
  import FloatLogos from "./FloatLogos.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import Testcomp from "./Testcomp.svelte";
  import { onMount } from "svelte";
  import Mask from "../../../routes/mask.svelte";

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
      console.error("Error fetching or updating visit count:", error.message);
    }

    // gsap.to('#scroll', {
    //   scrollTrigger: '#scroll', // start the animation when ".box" enters the viewport (once)
    //   x: -500
    // });
  });
  let hovering = false;
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
  class=" flex justify-center items-center w-full min-h-screen relative backdrop-blur-md"
  id="hero"
>
  <button
    class="rounded-full shadow-2xl py-1 px-10 text-white bg-gradient-to-r from-red-500 to-red-300 w-fit mt-2 absolute left-10 bottom-10"
    on:click={downloadFile}
    transition:slide={{ duration: 880, axis: "y" }}>Get My CV</button
  >
  <!-- <div class="alternative_bg_box"></div> -->
  <div class="bg-2-trans"></div>
  <!-- <GridBackground/> -->
  <div class="relative overflow-visible flex justify-center items-center">
    <div class="overflow-visible">
      <div
        class="text-[9rem] md:text-[15rem] text-shadow_ items-center overflow-visible w-full"
      >
        <div
          style="line-height: 1;"
          class="pacifico-regular text-red-600 md:text-[5rem] text-2xl"
          id="sit1"
        >
          <SectionTitle texts="DEV-." />
        </div>
        <Testcomp />
        <a
          href="#this"
          class=" block relative overflow-hidden md:w-[450px] w-[200px] borde"
          id="this"
          on:mouseenter={() => (hovering = true)}
          on:focus={() => (hovering = true)}
          on:mouseover={() => (hovering = true)}
          on:blur={() => (hovering = false)}
          on:mouseleave={() => (hovering = false)}
        >
          <img
            src="/tobs.svg"
            alt=""
            class=" grayscale hover:grayscale-0 w-full"
          />
          {#if !hovering}
            <div
              class={"absolute z-0 top-0 left-0 w-full h-full"}
              in:fly={{ x: 0, y: -500, duration: 100 }}
              out:fly={{ x: 0, y: -500, duration: 500, opacity: 1 }}
            >
              <Mask />
            </div>
          {/if}
        </a>
        <div class=" hidden items-end overflow-visible">
          <div class="relative z-50 overflow-x-visible">
            <svg
              width="220px"
              viewBox="0 0 31.722837 26.462975"
              version="1.1"
              id="svg1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              ><defs id="defs1" /><g
                id="layer2"
                transform="translate(27.840129,53.253596)"
                ><path
                  d="m -25.175064,-53.171762 c -1.43112,0 -2.58323,1.152108 -2.58323,2.583228 v 8.484915 h 8.94492 c 0.72167,0 1.30264,0.915663 1.30264,2.05322 v 12.761419 c 0,0.142895 -0.009,0.282004 -0.0265,0.416523 h 11.1170498 c -0.0174,-0.134519 -0.0265,-0.273628 -0.0265,-0.416523 v -12.761419 c 0,-1.137557 0.58097,-2.05322 1.30264,-2.05322 h 8.94492 v -8.484915 c 0,-1.43112 -1.15211,-2.583228 -2.58323,-2.583228 z"
                  class=" bg-slate-400 w-5"
                  id="path43"
                /></g
              ></svg
            >
          </div>
          <div class=" z-40 relativ">
            <svg
              width="189px"
              viewBox="0 0 26.675068 26.14946"
              version="1.1"
              id="svg1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              ><defs id="defs1" /><g
                id="layer2"
                transform="translate(110.70962,57.631373)"
                ><path
                  d="m -106.09071,-57.557542 c -2.51799,0 -4.54508,1.950134 -4.54508,4.37253 v 17.256455 c 0,2.422404 2.02709,4.37281 4.54508,4.37281 h 17.436947 c 2.51798,0 4.54537,-1.950406 4.54537,-4.37281 v -17.256455 c 0,-2.422396 -2.02739,-4.37253 -4.54537,-4.37253 z m 8.718467,6.901507 c 0.50836,0 0.91772,0.393823 0.91772,0.88288 v 10.432736 c 0,0.48906 -0.40936,0.882881 -0.91772,0.882881 -0.50835,0 -0.91742,-0.393821 -0.91742,-0.882881 v -10.432736 c 0,-0.489057 0.40907,-0.88288 0.91742,-0.88288 z"
                  id="path42"
                /></g
              ></svg
            >
          </div>
          <div class=" z-30 relative">
            <svg
              width="210px"
              viewBox="0 0 30.475098 25.93627"
              version="1.1"
              id="svg1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              ><defs id="defs1" /><g
                id="layer2"
                transform="translate(67.017595,33.961734)"
                ><path
                  d="m -55.748434,-33.879892 -11.18716,0.01185 0.0515,25.760734 h 5.81001 5.32568 14.76671 c 2.41398,0 4.35735,-1.510078 4.35735,-3.386005 v -6.77231 c 0,-1.12326 -0.69978,-2.112819 -1.77715,-2.728136 1.07727,-0.615325 1.77715,-1.604304 1.77715,-2.727513 v -6.77231 c 0,-1.875927 -1.94337,-3.38631 -4.35735,-3.38631 z m -0.27397,7.611713 h 9.49122 c 0.42633,0 0.76981,0.334827 0.76981,0.750815 0,0.415988 -0.34348,0.751127 -0.76981,0.751127 h -9.49122 c -0.42633,0 -0.76949,-0.335139 -0.76949,-0.751127 0,-0.415988 0.34316,-0.750815 0.76949,-0.750815 z m 0,8.510071 h 9.49122 c 0.42633,0 0.76981,0.334828 0.76981,0.750814 0,0.415991 -0.34348,0.750817 -0.76981,0.750817 h -9.49122 c -0.42633,0 -0.76949,-0.334826 -0.76949,-0.750817 0,-0.415986 0.34316,-0.750814 0.76949,-0.750814 z"
                  id="path41"
                /></g
              ></svg
            >
          </div>
          <div class=" z-20 relative">
            <svg
              width="100px"
              height="240px"
              viewBox="0 0 10.602978 29.48358"
              version="1.1"
              id="svg1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              ><defs id="defs1" /><g
                id="layer2"
                transform="translate(128.495,45.132392)"
                ><g
                  id="g41"
                  transform="matrix(0.61859301,0,0,0.61859301,-161.01018,-78.446153)"
                  ><rect
                    id="rect40"
                    width="17.005924"
                    height="33.425438"
                    x="52.630398"
                    y="68.023689"
                    ry="1.1937656"
                  /><rect
                    id="rect41"
                    width="16.712717"
                    height="12.901046"
                    x="52.777"
                    y="53.949829"
                    ry="2.0733836"
                  /></g
                ></g
              ></svg
            >
          </div>
        </div>

        <!-- <div class="relative overflow-visible">
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
        </div> -->
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
    class=" absolute md:left-0 left-0 w-[100vw] bottom-[100px] p-1 rounded-lg uppercase play-bold overflow-hidden "
  >
    <div class="relative w-fit overflow-visible ">
      <FloatLogos from="left" speed="40s" />
    </div>
  </div>
</section>

<div class=" fixed bottom-0 top-0 w-full left-0 -z-10">
  <div class="text-[30vw]  " id="scroll">AKANBI JOSEPH OLUWATOBI PORTFOLIO</div>
</div>

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
