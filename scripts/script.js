// get Element
const card1El=document.querySelector('.card-1');
const card2El=document.querySelector('.card-2');

const inputEl=document.querySelectorAll('.btns');
const submitEl=document.querySelector('.btn-orange');
const rateEl=document.querySelector('.rate-btn');
const rating=document.querySelector('.ratings');

// init function

function init(){
    rating.innerText=0;
}
init()

// add Event Listener    step-1

submitEl.addEventListener('click',function(){
card2El.classList.remove('hidden');
card1El.style.display='none'
})

//step-2
inputEl.forEach(function(but){
    but.addEventListener('click',function(){
        rating.innerHTML=but.innerHTML
    })
})


//step-3
rateEl.addEventListener('click',function(){
    card2El.classList.add('hidden');
    card1El.style.display='block'
    })