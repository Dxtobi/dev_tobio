
<script>

  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);



  $effect(()=>{
    const h = document.getElementById('holder')
    
    ScrollTrigger.create({
      trigger:'#_me',
      start:'top top',
      pin:true,
      pinSpacing:true,
      end:()=>"+=2000vh",
      scrub:true,
      onUpdate:(self)=>{
       const progress = self.progress
       gsap.to('#scroll_h',{
         x:`${-360*progress}vw`,
       })
       gsap.to('#scroll_o',{
         x:`${-360*progress}vw`,
       })
      }
    })

    

  })

  const about = [
    {
      img:'/m2.png',
      details:'I am a versatile developer with a passion for creating engaging digital experiences across various platforms. My expertise spans web, mobile, and game development, complemented by a strong foundation in graphic design.',
      bigt:'About Me?',
    },
   
    {
      img:'/m2.png',
      details:'As a full-stack web developer, I build dynamic and responsive web applications from the ground up. I leverage modern frameworks like React and Svelte/SvelteKit to craft efficient and user-friendly interfaces, backed by robust server-side logic.',
      bigt:'Web Dev',
    },
    {
      img:'/m2.png',
      details:'I specialize in cross-platform mobile app development using React Native, creating seamless and intuitive experiences for both iOS and Android users. My focus is on performance, user interface design, and delivering functional, engaging applications.',
      bigt:'Mobile Dev',
    },
    {
      img:'/m3.png',
      details:'My passion for game development centers around creating captivating 2D experiences. I utilize the Godot engine to design and implement unique gameplay mechanics, engaging narratives, and visually appealing interactive worlds.',
      bigt:'Game Dev',
    },
   
    {
      img:'/m2.png',
      details:'I bring ideas to life through compelling visuals. With proficiency in Adobe Photoshop and Illustrator, I create stunning graphics, user interface designs, and brand identities that effectively communicate messages and enhance digital products.',
      bigt:'Graphic Design',
    },
    {
      img:'/m2.png',
      details:'',
      bigt:'',
    },
   
    
  ]
</script>

<section id="_me" class="min-h-screen p-4  relative   about_ text-neutral-900">

   <div class="relative grid place-content-center h-screen w-full ">
     <div class="h-[80vh]  overflow-hidden  border w-full shadow-2xl " >
        <div  id='holder' class="min-h-screen transition-all w-full md:w-[80vw] flex flex-nowrap">
            <div class="flex flex-nowrap gap-3 backdrop-blur-3xl" id="scroll_h">
              {#each about as t, i}
              <div class="flex flex-col md:flex-row gap-10 justify-center h-screen items-center relative min-w-full md:min-w-[80vw]   " id={`trigger__`+i}>
                <span style="
                      line-height: 1;
                      -webkit-text-stroke: 2px red ;
                      color: transparent;
                  " class="text-[20vw] absolute left-0 z-[-1]  text-gray-600 top-0 orbitron-900  bottom-0 right-0 m-auto play-bold">{t.bigt}</span>
                <div class="text-4xl relative z-[3] md:w-[34%]  md:my-auto  p-4 pb-0" >
                  <img src={t.img} alt="" class={"rounded-md w-full shadow-lg opacity-0"}/>
                </div>
                <div class=" z-[3] md:w-[40%] absolute right-0 w-full md:right-[5rem] play-bold text-gray-600" style={``}>
                  <h class="text-4rem font-bold md:text-[5rem] " style="line-height: 1;">{t.bigt}</h>
                  <p class="py-4 md:text-2xl ">{t.details}</p>
                </div>
                <div class="glass absolute z-[0] ">
                  <img src={t.img} alt="" class={`${i==1&&'w-[30vw]'}  rounded-md w-ful`}/>
                </div>
              </div>
              {/each}
            </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-[100vh] grid place-content-center z-[-1]">
        <div class="flex flex-nowrap " id="scroll_o">
          {#each about as t, i}
          <div class="flex flex-col md:flex-row gap-10 justify-start h-screen items-center relative min-w-[80vw]" id={`trigger__`+i}>
            <span style="
                  line-height: 1;
              " class="text-[10vw] text-nowrap  z-[-1] text-red-600  orbitron-900">{t.bigt}</span>
          
          </div>
          {/each}
        </div>
      </div>
    <div>


  

     
</section>


<style>
  .cust-shadow{
    box-shadow: 0px 11px 90px -30px #55e8ff96;
  }
  .bg__pointer{
    background-color:red
  }
</style>