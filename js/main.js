
particlesJS.load('particles-js', 'js/particlesjs-config.json');

// boton resposive evento.

const btnResponsive = document.querySelector(".nav__btn-responsive");
const navUl= document.querySelector(".nav__ul");
const main = document.querySelector(".main");

btnResponsive.addEventListener("click",()=>{
    navUl.classList.toggle("active");
    btnResponsive.classList.toggle("active");
    main.classList.toggle("ResponsiveActive");
    
});

main.addEventListener("click",()=>{
    if(navUl.className.includes("active")){
        navUl.classList.toggle("active");
        btnResponsive.classList.toggle("active");
        main.classList.toggle("ResponsiveActive");
    }
});



