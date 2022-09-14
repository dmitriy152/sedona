
function searchHotel(){
    if (document.querySelector(".search_hotel"))
    {
        let bodyDocument = document.querySelector("body")
        let bacgroundClosedBox = document.querySelector(".conteiner_closed_box");
        let textBlockClosed = document.querySelector(".closed_hotel_box")
        let buttonClosedBox = document.querySelector(".button_closed_box");
        let loadingBoxSear = document.querySelector(".search_hotel_box")
        let loadingBoxSearhHotel = document.querySelector(".search_hotel");

        buttonClosedBox.addEventListener("click", function(){
        textBlockClosed.classList.remove("open_text_block")
        bacgroundClosedBox.classList.remove("open_text_block")
        bodyDocument.classList.remove("blur")
        })

        loadingBoxSearhHotel.addEventListener("click", function(){
        bodyDocument.classList.add("blur")
        bacgroundClosedBox.classList.add("open_text_block")
        loadingBoxSear.classList.toggle("loading_box_open")
        textBlockClosed.classList.remove("open_text_block")
        setTimeout(() => {
            loadingBoxSear.classList.remove("loading_box_open")
        }, 4000);
        setTimeout(() => {
            textBlockClosed.classList.add("open_text_block")
        }, 4100);
    })
} else return
}

export {searchHotel};