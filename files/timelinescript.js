// JS to show/hide boxes as you scroll

"use strict";

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",DisplayContent);
DisplayContent();

function DisplayContent(){
    const TriggerBottom = (window.innerHeight / 5)*4;
   
    boxes.forEach((box)=>{
        const topBox = box.getBoundingClientRect().top;

        if(topBox<TriggerBottom){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show");
        }
    });
}


//button opens and closes//
//event 1 button
const openBtn1 = document.getElementById("openModal1");
const closeBtn1 = document.getElementById("closeModal1");
const modal = document.getElementById("modal1");

openBtn1.addEventListener("click", () => {
    modal1.classList.add("open");
});

closeBtn1.addEventListener("click", () => {
    modal1.classList.remove("open");
});

//event 2 button
const openBtn2 = document.getElementById("openModal2");
const closeBtn2 = document.getElementById("closeModal2");
const modal2 = document.getElementById("modal2");

openBtn2.addEventListener("click", () => {
    modal2.classList.add("open");
});

closeBtn2.addEventListener("click", () => {
    modal2.classList.remove("open");
});


//event 3 button
const openBtn3 = document.getElementById("openModal3");
const closeBtn3 = document.getElementById("closeModal3");
const modal3 = document.getElementById("modal3");

openBtn3.addEventListener("click", () => {
    modal3.classList.add("open");
});

closeBtn3.addEventListener("click", () => {
    modal3.classList.remove("open");
});

//event 4 button
const openBtn4 = document.getElementById("openModal4");
const closeBtn4 = document.getElementById("closeModal4");
const modal4 = document.getElementById("modal4");

openBtn4.addEventListener("click", () => {
    modal4.classList.add("open");
});

closeBtn4.addEventListener("click", () => {
    modal4.classList.remove("open");
});


//event 5 button
const openBtn5 = document.getElementById("openModal5");
const closeBtn5 = document.getElementById("closeModal5");
const modal5 = document.getElementById("modal5");

openBtn5.addEventListener("click", () => {
    modal5.classList.add("open");
});

closeBtn5.addEventListener("click", () => {
    modal5.classList.remove("open");
});


//event 6 button
const openBtn6 = document.getElementById("openModal6");
const closeBtn6 = document.getElementById("closeModal6");
const modal6 = document.getElementById("modal6");

openBtn6.addEventListener("click", () => {
    modal6.classList.add("open");
});

closeBtn6.addEventListener("click", () => {
    modal6.classList.remove("open");
});


//event 7 button
const openBtn7 = document.getElementById("openModal7");
const closeBtn7 = document.getElementById("closeModal7");
const modal7 = document.getElementById("modal7");

openBtn7.addEventListener("click", () => {
    modal7.classList.add("open");
});

closeBtn7.addEventListener("click", () => {
    modal7.classList.remove("open");
});

//event 8 button
const openBtn8 = document.getElementById("openModal8");
const closeBtn8 = document.getElementById("closeModal8");
const modal8 = document.getElementById("modal8");

openBtn8.addEventListener("click", () => {
    modal8.classList.add("open");
});

closeBtn8.addEventListener("click", () => {
    modal8.classList.remove("open");
});

//event 9 button
const openBtn9 = document.getElementById("openModal9");
const closeBtn9 = document.getElementById("closeModal9");
const modal9 = document.getElementById("modal9");

openBtn9.addEventListener("click", () => {
    modal9.classList.add("open");
});

closeBtn9.addEventListener("click", () => {
    modal9.classList.remove("open");
});

//event 10 button
const openBtn10 = document.getElementById("openModal10");
const closeBtn10 = document.getElementById("closeModal10");
const modal10 = document.getElementById("modal10");

openBtn10.addEventListener("click", () => {
    modal10.classList.add("open");
});

closeBtn10.addEventListener("click", () => {
    modal10.classList.remove("open");
});
//event 11 button
const openBtn11 = document.getElementById("openModal11");
const closeBtn11 = document.getElementById("closeModal11");
const modal11 = document.getElementById("modal11");

openBtn11.addEventListener("click", () => {
    modal11.classList.add("open");
});

closeBtn11.addEventListener("click", () => {
    modal11.classList.remove("open");
});

//event 12 button
const openBtn12 = document.getElementById("openModal12");
const closeBtn12 = document.getElementById("closeModal12");
const modal12 = document.getElementById("modal12");

openBtn12.addEventListener("click", () => {
    modal12.classList.add("open");
});

closeBtn12.addEventListener("click", () => {
    modal12.classList.remove("open");
});

