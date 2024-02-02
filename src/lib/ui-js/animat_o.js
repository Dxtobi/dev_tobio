import gsap from "gsap";


import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// export const scrollOnO = () => {
//     gsap.registerPlugin(ScrollTrigger);
//     let tl = gsap.timeline({

//         scrollTrigger: {
//             trigger: 'body',

//         }
//     })



//     tl.addLabel('start').from("")

//const targetElements = document.querySelectorAll(".div-1 span:not(#first)");

export const scrollOnO = () => {
    let id = 'sit1'


    const original = document.querySelectorAll('.animate-entry-text');
    // const sit1 = document.getElementById('sit1');
    // const sit2 = document.getElementById('sit2');
    // const sit3 = document.getElementById('sit3');
    // const sit4 = document.getElementById('sit4');

    const positionsArr = {
       
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           
           
            if (entry.isIntersecting) {
              entry.target.classList.add('animate_text_entry', 'shake')
            } else {
                entry.target.classList.remove('animate_text_entry')
            }
        })
    })


    original.forEach((elem)=>{
      observer.observe(elem);

  })

}


