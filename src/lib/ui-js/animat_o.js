import gsap from "gsap";


import {ScrollTrigger} from "gsap/dist/ScrollTrigger";  
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
    let prevY, prevRatio
    let coming_in, going_out 
    const original = document.getElementById('hover-img');
    const st1 = document.getElementById('sit-1');
    const st2 = document.getElementById('sit-2');
    const st3 = document.getElementById('sit-3');
    const st4 = document.getElementById('sit-4')
   

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           
                       if (entry.isIntersecting) {
                           const positions = get_location(entry.target);
                           original.addA
                       } else {
                        
                       }       
        })
     })


    observer.observe(st1);
    observer.observe(st2);
    observer.observe(st3);
    observer.observe(st4);
    
}


/**
 * 
 * @param {HTMLElement} el 
 */
function get_location(el) {
   const xy =  el.getBoundingClientRect()

    return {
        x: xy.x,
        y:xy.y
    }

}
