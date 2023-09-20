$(function () {

})

window.addEventListener('DOMContentLoaded', () => {
    const signupActive = document.querySelector('.signup-block__info-active');
    const signupitem = document.querySelectorAll('.signup-block__info-item');

    signupActive.addEventListener('click', () => {
        signupitem.forEach(item => {
            item.classList.toggle('opacity');
        })
    })
})