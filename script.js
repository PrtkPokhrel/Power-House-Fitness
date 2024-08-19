
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



    function updateButtonStyles(activeButton, inactiveButton) {
        activeButton.style.backgroundColor = "#183D3D";
        activeButton.style.color = 'white';
        inactiveButton.style.backgroundColor = "#93B1A6";
        inactiveButton.style.color = 'black';
    }
    
    function monthly() {
        let varMn = document.querySelector('.btn_1');
        let varYr = document.querySelector('.btn_2');
        
        if (varMn && varYr) {
            updateButtonStyles(varMn, varYr);
        }
    }
    
    function yearly() {
        let varYr = document.querySelector('.btn_2');
        let varMn = document.querySelector('.btn_1');
        
        if (varYr && varMn) {
            updateButtonStyles(varYr, varMn);
        }
    }
    

    // 780
    // 862
    //65956
    