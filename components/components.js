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
