


export function mouse_hover(target, cssc_lass) {

    var tags = document.querySelectorAll(target)
    tags.forEach((elem) => {

        elem.classList.remove('ab-me-r', 'ab-me-w', 'ab-me-b')
        elem.classList.add(cssc_lass)
    })




}



export function mouse_hover_out() {

    var tags = document.querySelectorAll('.mouse-div')
    tags.forEach((elem) => {

        elem.classList.remove('ab-me-r', 'ab-me-w', 'ab-me-b')

    })


}