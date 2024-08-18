<script>
  import SectionTitle from "./SectionTitle.svelte";
  let testimonials = [
    {
      name: "Sarah Lee, Marketing Manager",
      testimony:
        "Joseph is an exceptional front-end developer who consistently delivers beautiful and user-friendly interfaces. He has a keen eye for detail and a deep understanding of user experience, which has been instrumental in boosting our website's conversion rates.",
    },
    {
      name: "David Kim, Back-End Developer",
      testimony:
        "Working with Joseph has been a pleasure. His clean code skills make collaboration a breeze. He's always willing to go the extra mile to ensure our projects are not only functional but also visually stunning.",
    },

    {
      name: "Emily Garcia, UI/UX Designer",
      testimony:
        "It's been fantastic collaborating with Joseph on several projects. His expertise in front-end development allows Him to seamlessly translate design concepts into functional prototypes. His problem-solving skills and positive attitude make Him a true asset to any team.",
    },
  ];
</script>

<section
  class="min-h-screen flex justify-start items-center w-full p-4 md:p-20"
  id="testimony"
>
  <div class="w-full">
    <div class="my-5 text-start text-[4rem] w-full">
      <div class="text-red-600 righteous-regular" id="sit4">
        <SectionTitle texts="REVIEW" />
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      {#each testimonials as _}
        <div class="bg-white p-6 rounded-lg shadow-md border">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">{_.name}</h3>
            <p class="text-gray-600">
              {_.testimony}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
