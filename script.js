
    document.addEventListener('DOMContentLoaded', () => {
    let ham=document.querySelector(".ham")
    let nav=document.querySelector(".mid")


        ham.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

        nav.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    });