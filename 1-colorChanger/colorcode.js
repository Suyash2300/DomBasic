let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')


buttons.forEach(function(button){
    button.addEventListener("click" , function(event){
        if(event.target.id == 'grey'){
            body.style.background = "grey"
        }
        else if(event.target.id == 'white'){
            body.style.background = "white"
        }
        else if(event.target.id == 'blue'){
            body.style.background = "blue"
        }
        if(event.target.id == 'yellow'){
            body.style.background = "yellow"
        }
    })
})