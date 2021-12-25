const navSlide =()=>{
const navMobile =document.querySelector(".icon")
const navBar =document.querySelector(".nav-link")
const navlink = document.querySelectorAll(".nav-link li")

navMobile.addEventListener( "click", ()=>{
    navBar.classList.toggle("nav-action")
});
}
navSlide()