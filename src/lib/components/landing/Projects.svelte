<script>
	import Projects from './Projects.svelte';
  import Bgtest from "./Bgtest.svelte";
  import EXample from "./EXample.svelte";
  import ProjectBox from "./ProjectBox.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  const project = [
        {
          url: "https://fber.vercel.app/",
          name: "fber",
          details: "Drag dnd drop form builder with inbuilt analytics",
        },
         {
          url: "https://xoxouis.vercel.app/formbuilder",
          name: "Task Manager",
          details: "A simple drag and drop task manager.",
        },
        {
          url: "https://extvweb.vercel.app/",
          name: "extvweb",
          details:
            "A movie download website with over 500+ movies works by scraping data off other websites. with 1.2k users",
        },
       
         {
          url: "https://xoxouis.vercel.app/agency",
          name: "The CREATIVE",
          details:
            "An agency focused on SEO, Web Dev/Design and Product branding",
        },
       
       
       
        {
          url: "https://xoxouis.vercel.app/",
          name: "UI test",
          details:
            "Were I test My UI Before implementing them on real word project.",
        },
        {
          url: "https://airbio.vercel.app/",
          name: "airbio",
          details: "An ai powered resume maker",
        },
        
      ]
  
</script>

<section
  class="min-h-screen p-4 py-16 md:p-20 flex flex-col items-center relative w-screen justify-center bg-white "
  id="projects"
>
  <div class="alternative_bg_box-1"></div>
  <div class="bg-2-trans-1"></div>
 <div
      class="text-red-600 righteous-regular text-[2rem] md:text-[5rem] "
      id="sit2"
    >
      <SectionTitle texts="PR*JECTS." />
    </div>
  <div class="my-5 text-start w-full">
   
  </div>
  <div class=" relative flex flex-col ">
    {#each project as pro}
    <a href={pro.url} class="border border-gray-400 p-4 rounded-md mb-4 hover:bg-red-600 transition-all hover:text-white hover:border-none">
        <div class=" space-y-2  rounded-md mb-10 p-3 overflow w-full">
          <h2 class="capitalize font-semibold righteous-regular  text-3xl ">{pro.name}</h2>
          <p>{pro.details}</p>
        </div>

        
      </a>
    {/each}
  </div>
  <div>
 
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
