<script>
	import Hero2 from './../lib/components/landing/Hero2.svelte';
  import AboutMe from "../lib/components/landing/AboutMe.svelte";
  import Blog from "../lib/components/landing/Blog.svelte";
  import Contact from "../lib/components/landing/Contact.svelte";
  import EXample from "../lib/components/landing/EXample.svelte";
  import Hero from "../lib/components/landing/Hero.svelte";
  import Projects from "../lib/components/landing/Projects.svelte";
</script>

<section class="main" id="main-comp">
  <Hero2/>
  <!-- <Hero /> -->
  <Projects />
  <EXample />
  
    <div>
      <AboutMe />
    </div>

  <Blog />
  <Contact />
</section>
