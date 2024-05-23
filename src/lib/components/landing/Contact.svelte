<script>
  import SectionTitle from "./SectionTitle.svelte";

  function sendMail(e) {
    e.preventDefault();
  }
</script>

<section
  id="contact"
  class="min-h-screen flex justify-start items-center w-full p-4 md:p-20 my-10 bg-neutral-950 text-neutral-300"
>
  <div class="w-full">
    <div class="my-5 text-start text-[4rem] w-full">
      <div class="text-red-500 righteous-regular" id="sit4">
        <SectionTitle texts="CONT*CT." />
      </div>
    </div>
    <div class="w-full flex flex-col md:flex-row gap-8 justify-between">
      <div
        class=" h-max text-3xl righteous-regular overflow-visible grid place-content-center bg-[#1c1c1c] rounded-lg text-white p-4 gap-4 md:w-[30%] w-full"
      >
        <div class="grid">
          Available For<br />
          Job Offers
        </div>
      </div>
      <div class=" flex justify-center w-full md:w-[60%] min-h-[50vh]">
        <form class="form-div w-full text-[2.3rem]" on:submit={sendMail}>
          <span>My name is</span>
          <input placeholder="your full name" class=" border-b contact-input" />
          <span>and I have </span>
          <input
            placeholder="project, job offer, gig etc"
            class=" border-b contact-input"
          />
          <span>You can reach me at</span>
          <input
            placeholder="your-email@email.com"
            class=" border-b contact-input"
          />
          <span>To get things started.</span>

          <br />
          <button
            class="text-2xl rounded-full py-1 px-4 bg-[#e94242e6] text-white shake"
            >Send info &rang;</button
          >
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .form-div > span {
    font-size: 2.2rem;
    font-weight: 600;
  }
  .form-div > input {
    text-transform: capitalize;

    color: #dc2626;
    font-size: larger;
    font-weight: 600;
    transition: 500ms ease-in-out;
    padding: 0px, 15px;
    background-color: transparent;
  }
</style>
