<script>
  export let from;
  export let speed;
  const dev_logo = [
    "game dev",
    "Web developer",
    "frontend heavy",
    "backend",
    "mobile [react native]",
    "game dev",
  ];
</script>

<div
  class={`${
    from ? "logo_animation-from" : "logo_animation"
  } grid grid-flow-col gap-4 my-4 items-center overflow-visible`}
  style={`--speed:${!speed ? "20s" : speed}`}
>
  {#each dev_logo as dev}
    <div
      class=" capitalize h-fit w-fit text-nowrap grid place-content-center px-[24px] py-[10px] bg-[#e6e6e647] hover:bg-red-500 hover:text-white backdrop-blur-[10px] rounded-[10px] z-0 hover:z-10 grayscale hover:drop-shadow transition-all hover:scale-[1.3] hover:grayscale-0"
      icon={dev}
    >
      {dev}
    </div>
  {/each}
</div>
