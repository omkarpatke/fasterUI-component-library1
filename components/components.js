// Modal Component
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const showBtn = document.querySelector('.show-btn')
const modalContent = document.querySelector('.modal-content');
const modalBtns = document.querySelectorAll('.modal-btns');
showBtn.addEventListener('click', () => {
    modal.style.display='block';
    modalContent.style.display = 'block';
})

closeBtn.addEventListener('click' , () => {
    modal.style.display='none';
    modalContent.style.display = 'none';
})

modalBtns.forEach((btn) => {
    btn.addEventListener('click' , () => {
        modal.style.display='none';
        modalContent.style.display = 'none';
    })
})

// ratings script
const allStars = document.querySelectorAll('.star');
const currentRating = document.querySelector('.current-rating');

allStars.forEach((star,i)=>{
    star.onclick = () => {
        let current_star_index = i +1;
        currentRating.innerText = `${current_star_index} Out Of 5`

        allStars.forEach((star,j)=>{
            if(current_star_index >= j+1){
                star.innerHTML = `&#9733`;
            }else{
                star.innerHTML = `&#9734`;
            }
        })
    }
})


// range slider


const rangeInput = document.querySelectorAll('.range-input input'),
priceInput = document.querySelectorAll('.price-input input'),
progress = document.querySelector('.slider .progress');

let priceGap=  1000;

priceInput.forEach(input => {
    input.addEventListener('input' ,(e) => {
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 20000){
            if(e.target.className === 'input-min'){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            }else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
            }
        }
    })
})

rangeInput.forEach(input => {
    input.addEventListener('input' ,(e) => {
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === 'range-min'){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
       
    })
})

// toast
const toastCloseBtn = document.querySelector('.toast-close-btn');
const toastContent = document.querySelector('.toast-content');
const toastBtn = document.querySelector('.toast-btn');
toastContent.style.right = '-100%';
toastCloseBtn.addEventListener('click',() => {
   toastContent.style.right = '-100%';
})

toastBtn.addEventListener('click',() => {
    toastContent.style.right = '1rem';
 })



// reponsiveness

const mobileIcon = document.querySelector('.mobile-icon');
const sideBar = document.querySelector('.sideBar');
const closeIcon = document.querySelector('.closeIcon');
mobileIcon.style.display='none';

if(screen.width <= 480){
    sideBar.style.left='-100%';
    mobileIcon.style.display='block';
    sideBar.addEventListener('click' , () => {
        mobileIcon.style.display='block';
        closeIcon.style.display='none';
        sideBar.style.left='-100%';
    })
} 

if(screen.width <= 640){
    sideBar.style.left='-100%';
    mobileIcon.style.display='block';
    sideBar.addEventListener('click' , () => {
        closeIcon.style.display='none';
        sideBar.style.left='-100%';
        mobileIcon.style.display='block';
    })
}

mobileIcon.addEventListener('click' , () => {
    sideBar.style.left='0';
    mobileIcon.style.display='none';
    closeIcon.style.display='block';
});

closeIcon.addEventListener('click' , () => {
     sideBar.style.left='-100%';
     mobileIcon.style.display='block';
     closeIcon.style.display='none';
})
