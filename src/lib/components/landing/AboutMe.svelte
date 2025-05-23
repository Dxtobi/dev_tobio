<script>
  import FloatLogos from "./FloatLogos.svelte";
  // import GridBackground from "../GridBackground.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import { mouse_hover, mouse_hover_out } from "../../ui-js/mouseover";
</script>

<section
  id="about"
  class="min-h-screen relative"
  style="background: linear-gradient(349deg, #33333347, #888888);"
>
  <!-- <div class="absolute z-[-1] top-[200px] right-0 md:right-[10px]">
    <FloatLogos speed="50s" />
  </div>
  <div class="absolute z-[-1] top-[100px] right-0 md:right-[10px]">
    <FloatLogos speed="40s" />
  </div>
  <div class="absolute z-[-1] top-[150px] right-0 md:right-[10px]">
    <FloatLogos from="left" />
  </div> -->
  <div>
    <h2
      class="text-[5rem] absolute font-bold top-20 left-4 text-white flex flex-col"
      style="line-height: normal;"
      id="sit3"
    >
      <div><SectionTitle texts="ABOUT" /></div>
      <div
        style="  -webkit-text-stroke: 1px #dc2626; color:#dc2626"
        class=" z-20"
      >
        <SectionTitle texts="ME." />
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
      class="absolute w-full h-[70%] md:h-[45%] z-20 bottom-0 backdrop-blur-[30px] "
    >
      <a
        href="/"
        on:mousemove={() => mouse_hover(".mouse-div", "ab-me-w")}
        on:mouseout={() => mouse_hover_out()}
        on:blur={mouse_hover_out}
        class="flex flex-col bg-[#1e1e1e] text-white w-full"
      >
        <h2 class="font-bold" style="font-family:  sans-serif;">
          <span class="text-[20px]">Web / Mobil</span><br /><span
            class=" text-[40px] text-transparent"
            style="  -webkit-text-stroke: 1px #fff;"
          >
            Developer</span
          >
        </h2>
      </a>
    
      <p class="text-xl/10 p-4 ">
        While I enjoy exploring various fields such as <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">data analysis</span>,
         <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">game development</span>, <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">graphic design</span>, and <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">sound engineering</span>, 
        <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">web development</span> and <span class="capitalize font-semibold righteous-regular text-white bg-black px-4 py-1 rounded-md">mobile development</span> have always been my true passion.
        I find immense joy in creating and designing websites and applications that are not only functional but also visually appealing.
         
      </p>
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
