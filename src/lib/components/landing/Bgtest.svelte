<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <defs>
    <path
      id="dashedLine"
      d="M0 50 L200 50"
      stroke="black"
      stroke-width="2"
      stroke-dasharray="5 5"
    />

    <filter id="glow">
      <feGaussianBlur stdDeviation="3 3" result="glowBlur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="10" />
      </feComponentTransfer>
    </filter>
  </defs>

  <use xlink:href="#dashedLine" class="glowLine" filter="url(#glow)" />

  <path
    id="animatedLine"
    d="M0 50 L200 50"
    stroke="white"
    stroke-width="2"
    stroke-dasharray="3400 3400"
    stroke-dashoffset="3400"
  />
</svg>

<style>
  .glowLine {
    opacity: 0.5; /* Adjust opacity of the glowing line */
  }

  #animatedLine {
    animation: animateLine 4s forwards ease-in-out;
  }

  @keyframes animateLine {
    from {
      stroke-dashoffset: 3400;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
