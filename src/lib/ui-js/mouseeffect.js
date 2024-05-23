
const coordinates = { x: 0, y: 0 }
let mouse, eve, timeout
export const startMouseEffect = () => {


    mouse = document.querySelectorAll('.mouse-div');
    // eve = document.getElementById('name-id').getClientRects();

    mouse.forEach(function (elem) {

        elem.x = 0;
        elem.y = 0;
    })

    window.addEventListener("mousemove", (e) => {

        coordinates.x = e.pageX;
        coordinates.y = e.pageY;

        mouse.forEach(function (elem) {

            elem.style.display = 'block';
        })

        //  / console.log(coordinates)

    })


}



export const animate_mouse = () => {
    let x = coordinates.x, y = coordinates.y
    const mouse = document.querySelectorAll('.mouse-div');
    // let eve = document.querySelector('#top-banner')
    // eve.style = `--mouse-x:${x - 100}px`
    mouse.forEach(function (elem, i) {
        //    console.log(elem.x)

        elem.style.left = x - 20 + "px";
        elem.style.top = y - 20 + "px";
        elem.style.transform = `scale(${(mouse.length - i) / mouse.length})`
        // console.log((mouse.length - i) / mouse.length);
        elem.x = x;
        elem.y = y;
        const next_circle = mouse[i + 1] || mouse[0]
        x += (next_circle.x - x) * 0.5;
        y += (next_circle.y - y) * 0.5
    })

    requestAnimationFrame(animate_mouse)
}