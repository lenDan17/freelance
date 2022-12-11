

const blockBody = document.querySelector('.block');
document.addEventListener("click" , block);
document.addEventListener("keyup" , block);
function block (event){
    if (event.target.closest('.block__button')){
        blockBody.classList.toggle('_active');
    }
    if(!event.target.closest('.block')|| event.code === "Escare"){
        blockBody.classList.remove('_active');
    }
}

const textLine = document.querySelector('.page__input');
const textLimit = textLine.getAttribute('maxlength');
const textLabel = document.querySelector('.block__label span');
textLabel.innerHTML = textLimit;
textLine.addEventListener("keyup" , textSetLabel);

function textSetLabel(){
    const textResult = textLimit - textLine.value.length;
    textLabel.innerHTML = textResult;
}