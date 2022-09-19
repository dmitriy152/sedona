
function buttonLike(){
    let likeButtonCatalog = document.querySelectorAll(".like_button_catalog")

    for (let i=0; i < likeButtonCatalog.length; i++ ){
    likeButtonCatalog[i].addEventListener("click", function(){
        this.querySelector(".like_icon").classList.toggle("like_toggle")
        if (this.querySelector(".like_icon").classList.contains("like_toggle")){
        this.querySelector(".counter_like_catalog").textContent++
        } else {this.querySelector(".counter_like_catalog").textContent--}
    })
    }
}
export {buttonLike};