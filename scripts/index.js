const concerts = document.querySelector('.concerts')



//usunięcie przycisku i dodanie tekstu w jego miejsce
concerts.addEventListener('click', (e)=>{
    if(e.target.matches("button")){
       
        let button = e.target;
        let parent = button.parentNode;
        parent.removeChild(button);
        let newText = document.createElement('span');
        newText.textContent = " Have Fun! ";
        parent.appendChild(newText);

    }
})

const submit = document.querySelector('.button.button--contact')
const email = document.querySelector('#email')
const topic = document.querySelector('#topic')

//wylogowanie do konsoli e-maila i tematu
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(email.value + " " +  topic.value);
  
})

const hamburger = document.querySelector('.hamburger')
const items = document.querySelector('.hamburger__items')
hamburger.addEventListener('click', (e) => {
    if(items.style.display == "block"){
        items.style.display = "none";
    }else{
        items.style.display = "block"; 
    }
})

