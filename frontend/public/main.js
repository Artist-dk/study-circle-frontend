const boxes = document.querySelectorAll('svg')
const hidp = document.querySelectorAll('svg .hid')
window.addEventListener('scroll',checkBoxes) 
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight
    hidp.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const p = box.querySelector('.hid')
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
            // hid.style.transform = "scale(7%)"
        }
        // console.log(boxes)
    })
}
window.addEventListener('load',setup);
function setup() {
    setTimeout(()=>{document.querySelector('.page').classList.toggle('loaded-page')}, 100)
}