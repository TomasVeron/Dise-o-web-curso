
// boton resposive evento.

const btnResponsive = document.querySelector(".nav__btn-responsive")
const navUl= document.querySelector(".nav__ul")
const btnBackMenuGitbox = document.querySelector(".nav__btnBackMenuGitbox")


btnResponsive.addEventListener("click",()=>{
    navUl.classList.toggle("active");
    btnResponsive.classList.toggle("active");
    btnBackMenuGitbox.classList.toggle("active");
});

btnBackMenuGitbox.addEventListener("click",()=>{
    navUl.classList.toggle("active");
    btnResponsive.classList.toggle("active");
    btnBackMenuGitbox.classList.toggle("active");
});

