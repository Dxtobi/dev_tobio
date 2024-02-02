<script>
  import AboutMe from './AboutMe.svelte';
  import SectionTitle from "./SectionTitle.svelte";
  // import GridBackground from "../GridBackground.svelte";
  let about_, project_, blog_

  const projectTypes = [
    { pro:'backend', num:8, context:'This includes personal projects on production'},
   { pro:'frontend', num:20, context:'Dose not includes clients projects'},
   { pro:'on production', num:5, context:'This are personal projects on production'},
   { pro:'graphic designs', num:50, context:'This includes personal designs'}
  
  ];
</script>



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
    z-index: 20!important;
    background-position: center!important;
    filter: blur(0px)!important;
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
<section class="min-h-screen p-8 md:p-20 flex  flex-col items-center relative w-screen">
    
    <div class="alternative_bg_box-1"></div>
    <div class="bg-2-trans-1"></div>
   
    <div class="my-5 text-start w-full">
      <p class="text-red-600 righteous-regular text-[4rem] md:text-[5rem]" id="sit2"><SectionTitle texts='PR*JECTS.' /></p>
    </div>
  <div class="w-screen  project-body overflow-visible relative">
    <!-- <div class="indicator">
      <span>Scroll</span> <span> &rarr;</span>
    </div> -->
    <div class="total-project top-[-5%] md:top-0">
      <p class="text-red-600 play-bold">TOTAL</p>
      <h3 class="text-gray-600 play-bold text-[2rem]">50+</h3>
    </div>
     <div class="----2 flex justify-center">
      <!-- carrousel-parent -->
      <div class=" carrousel-parent  grid-cols-2 md:grid-cols-4 justify-center overflow-visible gap-3 my-10 w-full whitespace-nowrap md:mt-[5rem]">
        {#each projectTypes as i, o }
            <div class="comp-holder">
              <div class="project-cards flex items-end" style={`--num-tag:${o}`}>
                <div class=" capitalize  font-semibold">
                  {i.pro}
                </div>
                <div class="hover_arrow">
                  &rarr;
                </div>
               
              </div>
              <!-- <div class="hover_context righteous-regular">{i.context}</div> -->
              <div class="hover_number righteous-regular">{i.num}+</div>
            </div>
        {/each}
      </div>
     </div>
  </div>

</section>

<AboutMe></AboutMe>


  <section class="min-h-screen  flex justify-start  items-center w-full p-8 md:p-20">
    <div class="w-full">
      <div class="my-5 text-start text-[4rem] w-full">
          <p class="text-red-600 righteous-regular   " id="sit4"><SectionTitle texts='BL?G.' /></p>
        </div>
      <div>

      </div>
       
    </div>
  </section>

  <section class="min-h-screen  flex justify-start  items-center w-full p-8 md:p-20">
    <div class="w-full">
      <div class="my-5 text-start text-[4rem] w-full">
          <p class="text-red-600 righteous-regular   " id="sit4"><SectionTitle texts='C*NTACT.' /></p>
        </div>
      <div>

      </div>
       
    </div>
  </section>