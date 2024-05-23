<!-- <script>
  import { onMount } from "svelte";

  let children;

  // Function to position the children in a circle
  function positionChildren() {
    const radius = 100; // Adjust the radius as needed
    const angleStep = (2 * Math.PI) / children.length;

    children.forEach((child, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle) - child.offsetWidth / 2;
      const y = radius * Math.sin(angle) - child.offsetHeight / 2;
      child.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // Reset children positions
  function resetChildren() {
    children.forEach((child) => {
      child.style.transform = `translate(0, 0)`;
    });
  }

  // Assign the children elements on mount
  onMount(() => {
    children = Array.from(
      document.querySelectorAll(".circle-container .child")
    );
  });
</script>

<div
  class="circle-container relative w-52 h-52 mx-auto border-2 border-black rounded-full flex justify-center items-center"
  on:mouseover={positionChildren}
  on:mouseout={resetChildren}
  on:blur={resetChildren}
  on:focus={positionChildren}
  role="link"
  tabindex="-1"
>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    1
  </div>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    2
  </div>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    3
  </div>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    4
  </div>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    5
  </div>
  <div
    class="child absolute w-10 h-10 bg-red-500 rounded-full text-center leading-10"
  >
    6
  </div>
</div>

<style>
  .child {
    transition: transform 0.3s ease;
  }
</style> -->
