 function popup(){
    let gamburger = document.querySelector("nav");
    let buttonHeader = document.querySelector(".button_nav");
    buttonHeader.addEventListener('click', function () {
    gamburger.classList.toggle("nav_open")});

    let buttonHeaderClosed =  document.querySelector(".button_closed");
    buttonHeaderClosed.addEventListener("click", function(){
    gamburger.classList.remove("nav_open")
})
}
    
export {popup};




