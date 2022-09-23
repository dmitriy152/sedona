function formButtonSent(){
    if (document.querySelector(".successfully_sent")){
        let formBlock =  document.querySelector(".successfully_sent")
        let submiteForm = document.querySelector(".submite_form")
        
        submiteForm.addEventListener("click", function(evt){
            evt.preventDefault()
            // отправка формы, например через Ajax
            formBlock.classList.toggle("closed_form")
            formBlock.scrollIntoView({block: "center"});
        })

        
        let buttonSend = document.querySelector(".form_button_send")
        buttonSend.addEventListener("click", function(){
            formBlock.classList.toggle("closed_form")
        })
    }
}

export {formButtonSent};
