

export const scrollOnO = () => {



  const original = document.querySelectorAll('.animate-entry-text');


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {


      if (entry.isIntersecting) {
        entry.target.classList.add('animate_text_entry', 'shake')
      } else {
        entry.target.classList.remove('animate_text_entry')
      }
    })
  })




  original.forEach((elem) => {
    observer.observe(elem);
  });



}


