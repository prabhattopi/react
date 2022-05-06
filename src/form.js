const slidePage=document.querySelector(".slidepage");

const firtNextBtn=document.querySelector(".nextBtn");
const prevBtnSec=document.querySelector(".prev-1");
const nextBtnSec=document.querySelector(".next-1");
const prevBtnThird=document.querySelector(".prev-2");
const nextBtnThird=document.querySelector(".next-2");
const prevBtnFourth=document.querySelector(".prev-3");
const submitBtn=document.querySelector(".Submit");
const progressText=document.querySelectorAll(".step p");
const progressCheck=document.querySelectorAll(".step .check");
const bullet=document.querySelectorAll(".step .bullet");

let max=4;
let current=1;



// const progree


firtNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current-1].classList.add("active");
    progressText[current-1].classList.add("active");

    progressCheck[current-1].classList.add("active");
    current+=1;
})
nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
      bullet[current-1].classList.add("active");
      progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
})
nextBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-75%";
      bullet[current-1].classList.add("active");
      progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
})
submitBtn.addEventListener("click",function(){
    
 
      bullet[current-1].classList.add("active");
      progressText[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    current+=1;
    setTimeout(() => {
        let name=document.querySelector("#first").value
    let last=document.getElementById("last").value
       alert(`You are successfully signedin ${name} ${last}`) 
       window.location.reload()
    }, 800);
})


prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="0%";

    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current-=1;



})
prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";

    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current -=1;
})
prevBtnFourth.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";


    bullet[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");

    progressCheck[current-2].classList.remove("active");
    current-=1;
})

