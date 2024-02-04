let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let tf1 = document.querySelector('.div1');
let tf2 = document.querySelector('.div2');
let tf3 = document.querySelector('.div3');
let tf4 = document.querySelector('.div4');
let tf5 = document.querySelector('.div5');
let tf6 = document.querySelector('.div6');
let tf7 = document.querySelector('.div7');

tf1.style.visibility = 'visible',tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';

function toggling1(){
  addEventListener('click', ()=>{
    tf1.style.visibility = 'visible',tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling2(){
  addEventListener('click', ()=>{
    tf2.style.visibility = 'visible',

    tf1.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling3(){
  addEventListener('click', ()=>{
    tf3.style.visibility = 'visible',
    tf2.style.visibility = 'hidden',tf1.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling4(){
  addEventListener('click', ()=>{
    tf4.style.visibility = 'visible',
    tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf1.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling5(){
  addEventListener('click', ()=>{
    tf5.style.visibility = 'visible',
    tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf1.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling6(){
  addEventListener('click', ()=>{
    tf6.style.visibility = 'visible',
    tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf1.style.visibility = 'hidden',tf7.style.visibility = 'hidden';
  })
}
function toggling7(){
  addEventListener('click', ()=>{
    tf7.style.visibility = 'visible',
    tf2.style.visibility = 'hidden',tf3.style.visibility = 'hidden',tf4.style.visibility = 'hidden',tf5.style.visibility = 'hidden',tf6.style.visibility = 'hidden',tf1.style.visibility = 'hidden';
  })
}