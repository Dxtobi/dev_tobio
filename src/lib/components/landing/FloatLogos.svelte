
<script>

    const tools_logo=[]
    const dev_logo = ['devicon:svelte',
    "devicon:nextjs","devicon:nodejs-wordmark",
     "devicon:express-wordmark","devicon:nestjs",
      "devicon:tailwindcss","logos:adobe-photoshop","logos:adobe-illustrator",
     'devicon:svelte',"devicon:nextjs","devicon:nodejs-wordmark",
      "devicon:express-wordmark","devicon:nestjs",
      "devicon:tailwindcss","logos:adobe-photoshop","logos:adobe-illustrator"];

</script>

    <div class='logo_animation grid grid-flow-col gap-4 my-4'>
    
      {#each dev_logo as dev}
      <iconify-icon  class="  grid place-content-center px-[24px] py-[10px] h-[40px] bg-[#e6e6e647] backdrop-blur-[10px] rounded-[10px] z-0 grayscale  hover:drop-shadow transition-all hover:text-[2rem] hover:grayscale-0"   icon={dev}></iconify-icon>
      {/each}
    </div>
