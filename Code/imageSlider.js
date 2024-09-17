let slides=document.querySelectorAll('.slide')
let sLength=slides.length
console.log(slides);

let slideIndex=0
let intervalId
initilazeSlide()
function initilazeSlide(){

    if(slides.length>0){
    slides[slideIndex].classList.add('displayImage')
    // intervalId=setInterval(nextSlide ,2000)

    }
 }

 function showSlide(index){
   if(index>=sLength){
        slideIndex=0
   }

   else if(index<0){
    slideIndex=sLength-1
   }

   else {
    slides.forEach((slide)=>{
        slide.classList.remove('displayImage')
    })
    slides[index].classList.add('displayImage')
   }

 }

 function prevSlide(){
    slideIndex--
    showSlide(slideIndex)
 }

 function nextSlide(){
    slideIndex++
    showSlide(slideIndex)
    console.log('i am clicked');
    
 }

 