
document.addEventListener('DOMContentLoaded', () => {
    let ham = document.querySelector(".ham")
    let nav = document.querySelector(".mid")


    ham.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
});



function updateButtonStyles(activeButton, inactiveButton) {
    activeButton.style.backgroundColor = "#183D3D";
    activeButton.style.color = 'white';
    inactiveButton.style.backgroundColor = "#93B1A6";
    inactiveButton.style.color = 'black';
}



 


function yearly() {
    let varYr = document.querySelector('.btn_2');
    let varMn = document.querySelector('.btn_1');

    if (varYr && varMn) {
        updateButtonStyles(varYr, varMn);
    }

    let yearlySub=document.querySelector('.yearly')
    yearlySub.classList.add('visible')

    let monthlySub=document.querySelector('.monthly')
    monthlySub.classList.remove('visible')
 

   
}

function monthly() {
    let varMn = document.querySelector('.btn_1');
    let varYr = document.querySelector('.btn_2');

    if (varMn && varYr) {
        updateButtonStyles(varMn, varYr);
    }

    let yearlySub=document.querySelector('.yearly')
    yearlySub.classList.remove('visible')
    

    let monthlySub=document.querySelector('.monthly')
    monthlySub.classList.add('visible')


}
 
 


let month = document.querySelector('.monthlyContainer');
let quarter = document.querySelector('.quaterlyContainer');
let semi_q = document.querySelector('.semi_quaterlyContainer');
let arr = [month, quarter, semi_q];
let slideIndex = 0;

function initilazeSlide() {
    arr[slideIndex].classList.add('visible');
}

function showSlide(index) {
    if (index >= arr.length) {
        slideIndex = 0; 
    } else if (index < 0) {
        slideIndex = arr.length - 1; 
    }

 
    arr.forEach((element) => {
        element.classList.remove('visible');
    });
 
    arr[slideIndex].classList.add('visible');
}

function nextSlide() {
 
    slideIndex++
    showSlide(slideIndex);
}

function prevSlide() {
 
    slideIndex--
    showSlide(slideIndex);
}

 
initilazeSlide();
let monthlySub=document.querySelector('.monthly')
monthlySub.classList.add('visible')