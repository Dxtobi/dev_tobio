<script>
  import { fly, slide } from "svelte/transition";

  export let project;
  export let index;

  let clicked = false;
  const toggle = () => (clicked = !clicked);
  let texts_displayed = {
    url: "",
    name: `${project.pro}`,
    details: project.context,
    bg: project.bg,
    text: project.text,
    active: 10,
  };

  let change_bg_active = 10;
  let changed = 10;
  // console.log(project);
  const change_bg = (bgd, i) => {
    texts_displayed = {
      ...texts_displayed,
      ...bgd,
      active: i,
    };
    changed = i;
    change_bg_active = i;
    console.log(change_bg_active);
  };
  const update_show = (i) => (change_bg_active = i);
</script>

{#if project.pro !== "graphic designs"}
  <div class="comp-holder">
    <div class="project-cards flex items-end" style={`--num-tag:${index}`}>
      <div class=" capitalize font-semibold text-center">
        {project.pro}
      </div>
      <button on:click={toggle} class="hover_arrow">&rarr;</button>
    </div>
    <div class="hover_number righteous-regular">{project.num}+</div>
  </div>

  {#if clicked}
    <section
      in:slide={{ axis: "x" }}
      out:slide={{ axis: "x" }}
      class="bg-[#ffffff] backdrop-blur-[34px] h-screen w-screen fixed left-0 top-0 z-[300]"
    >
      <div class="relative w-full h-full overflow-y-scroll p-5">
        <button
          in:fly={{ x: -300, y: 0, duration: 300 }}
          out:fly={{ x: -200, y: 400, duration: 300 }}
          on:click={toggle}
          class="text-5xl left-[45%] bottom-10 font-bold text-red-600 fixed z-50 md:left-4"
          >&larr;</button
        >
        <div
          class={`w-full h-full absolute grid items-start md:place-content-center`}
        >
          {#if change_bg_active == texts_displayed.active}{#key texts_displayed.active}
              <div
                class=" w-fit h-full flex flex-col gap-10 overflow-visible items-center"
                in:fly={{ x: 0, y: -400 }}
                out:fly={{ x: 0, y: -400 }}
              >
                <h2
                  class="font-bold md:text-[5rem] text-3xl capitalize"
                  key={texts_displayed.key}
                >
                  {texts_displayed.name}
                </h2>
                <p class="text-xl md:text-2xl text-wrap">
                  {texts_displayed.details}
                </p>
                <a
                  href={texts_displayed.url}
                  class="rounded-full px-20 py-1 border-2 text-center text-2xl w-fit"
                >
                  Visit</a
                >
              </div>
            {/key}{/if}
        </div>
        <div
          class="absolute bottom-10 left-0 right-0 w-[90%] md:w-[80%] flex-wrap md:flex-nowrap flex m-auto gap-4 justify-center overflow-visible"
        >
          {#each project.projects as pro, i}
            <a
              href={"#"}
              on:mouseenter={() => {
                change_bg(pro, i);
              }}
              on:mouseover={() => {
                change_bg(pro, i);
              }}
              on:focus={() => {
                change_bg(pro, i);
              }}
              on:mouseleave={() => {
                changed = 10;
              }}
              on:mouseout={() => {
                changed = 10;
              }}
              on:blur={() => {
                changed = 10;
              }}
              class={` h-[300px] w-[200px]  grid place-content-center`}
            >
              <div
                class={`${changed === i ? " -translate-y-20 " : "translate-y-0"} transition-all  h-auto grid justify-between rounded-sm overflow-visible`}
              >
                <h2 class="font-bold capitalize">{pro.name}</h2>
                <!-- <p class=" whitespace-normal">
                  {pro.details}
                </p> -->
                <div
                  class={`${changed === i ? " shadow-2xl" : ""} transition-all rounded-lg bg-gray-200 h-[150px] w-[150px] mt-3 grid place-content-center text-2xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    />
                  </svg>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>
  {/if}
{:else}
  <div class="comp-holder">
    <div class="project-cards flex items-end" style={`--num-tag:${index}`}>
      <div class=" capitalize font-semibold">
        {project.pro}
      </div>
      <a href="https://www.pinterest.com/akanbijosephtobi/" class="hover_arrow"
        >&rarr;</a
      >
    </div>
    <!-- <div class="hover_context righteous-regular">{i.context}</div> -->
    <div class="hover_number righteous-regular">{project.num}+</div>
  </div>
{/if}
