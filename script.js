const dot_1 = document.getElementById('dot_1')
const dot_2 = document.getElementById('dot_2')
const dot_3 = document.getElementById('dot_3')

let slide_1 = document.getElementById('slide_1')
let slide_2 = document.getElementById('slide_2')
let slide_3 = document.getElementById('slide_3')

//last dot
function DotThree(){
    dot_1.classList.remove('active')
    dot_2.classList.remove('active')
    dot_3.classList.add('active')
    slide_1.style.opacity = '0%';
    slide_2.style.opacity = '0%';
    slide_3.style.opacity = '100%';
}
//second dot
function DotTwo(){
    dot_1.classList.remove('active')
    dot_2.classList.add('active')
    dot_3.classList.remove('active')
    slide_1.style.opacity = '0%';
    slide_2.style.opacity = '100%';
    slide_3.style.opacity = '0%';
}
//frist dot
function DotOne(){
    dot_1.classList.add('active')
    dot_2.classList.remove('active')
    dot_3.classList.remove('active')
    slide_1.style.opacity = '100%';
    slide_2.style.opacity = '0%';
    slide_3.style.opacity = '0%';
}
