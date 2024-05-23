<script>
  import Bgtest from "./Bgtest.svelte";
  import EXample from "./EXample.svelte";
  import ProjectBox from "./ProjectBox.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  const projectTypes = [
    {
      pro: "backend",
      num: 8,
      context: "This includes personal projects on production",
      projects: [
        {
          url: "https://github.com/Dxtobi/nineonx",
          name: "nineonx",
          details: "A movie scraping API built with Express js",
        },
        {
          url: "https://github.com/Dxtobi/supperApi",
          name: "supperApi",
          details: "Express JS mongoose auth template",
        },
        {
          url: "https://github.com/Dxtobi/e-commerce",
          name: "E-commerce",
          details: "An e commerce API built with NESTJS",
        },
        {
          url: "https://github.com/Dxtobi/ecom-nest-api",
          name: "ecom-nest-api",
          details: "An e commerce API built with NESTJS",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
      ],
    },
    {
      pro: "frontend",
      num: 20,
      context: "Dose not includes clients projects",
      projects: [
        {
          url: "https://xoxouis.vercel.app/agency",
          name: "The CREATIVE",
          details:
            "An agency focused on SEO, Web Dev/Design and Product branding",
        },
        {
          url: "https://xoxouis.vercel.app/platform",
          name: "Platformer",
          details:
            "A platform pined on broadcasting your products or services on all available media.",
        },
        {
          url: "https://xoxouis.vercel.app/formbuilder",
          name: "Task Manager",
          details: "A simple drag and drop task manager.",
        },
        {
          url: "https://xoxouis.vercel.app/drags",
          name: "Form builder UI",
          details: "A simple drag and drop form builder.",
        },
        {
          url: "https://xoxouis.vercel.app/",
          name: "UI test",
          details:
            "Were I test My UI Before implementing them on real word project.",
        },
      ],
    },
    {
      pro: "on production",
      num: 5,
      context: "This are personal projects on production",
      projects: [
        {
          url: "https://extvweb.vercel.app/",
          name: "extvweb",
          details:
            "A movie download website with over 500+ movies works by scraping data off other websites.",
        },
        {
          url: "https://xoxodownloader.vercel.app/",
          name: "xoxodownloader",
          details: "Youtube video downloader",
        },
        {
          url: "https://airbio.vercel.app/",
          name: "airbio",
          details: "An ai powered resume maker",
        },
        {
          url: "https://sumerizer.vercel.app",
          name: "summerier",
          details: "An Ai powered tool to summarize website content",
        },
        {
          url: "https://sneakybite.vercel.app/",
          name: "Mobile Demo SneakyBite",
          details:
            "A demo app for a mobile food delivery app this demo of the website is for mobile only.",
        },
        {
          url: "https://twiwi.vercel.app/",
          name: "twiwi",
          details:
            "An Ai powered tool to summarize tweets or create images from tweets.",
        },
      ],
    },
    {
      pro: "graphic designs",
      num: 50,
      context: "This includes personal designs",
      projects: [
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
        {
          url: "https://github.com/Dxtobi/Bee-backend",
          name: "Bee",
          details: "A social media backend API with Express js",
        },
      ],
    },
  ];
</script>

<section
  class="min-h-screen p-4 py-16 md:p-20 flex flex-col items-center relative w-screen justify-center"
  id="projects"
>
  <div class="alternative_bg_box-1"></div>
  <div class="bg-2-trans-1"></div>

  <div class="my-5 text-start w-full">
    <div
      class="text-red-600 righteous-regular text-[4rem] md:text-[5rem]"
      id="sit2"
    >
      <SectionTitle texts="PR*JECTS." />
    </div>
  </div>
  <div class=" project-body overflow-visible relative">
    <!-- <div class="indicator">
      <span>Scroll</span> <span> &rarr;</span>
    </div> -->
    <div class="total-project top-[-5%] md:top-0">
      <p class="text-red-600 play-bold">TOTAL</p>
      <h3 class="text-gray-600 play-bold text-[2rem]">50+</h3>
    </div>
    <div class="----2 flex justify-center overflow-visible">
      <!-- carrousel-parent -->
      <div
        class=" carrousel-parent grid-cols-2 md:grid-cols-4 justify-center overflow-visible gap-3 my-10 w-full whitespace-nowrap md:mt-[5rem]"
      >
        {#each projectTypes as i, o}
          <ProjectBox project={i} index={o}></ProjectBox>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .img-bg-2 {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(9px);
    opacity: 0.05;
    background-attachment: fixed;
    background-repeat: repeat;
    background-position: center;
    background-size: contain;
    /* transition: 1s ease-in 1s; */
  }

  .img-bg-3 {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;

    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    filter: blur(5px);
    transition: 1s ease-in 1s;
    /* this is suppose to be a dope animation but i no get time */
    z-index: 20 !important;
    background-position: center !important;
    filter: blur(0px) !important;
    transition: 0.1s ease-in 0.1s;
  }

  .img-bg {
    height: 140vh;
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left;
  }
</style>
