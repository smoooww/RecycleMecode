const hiddenElements = document.querySelectorAll('.hidden');

const hiddenRight = document.querySelectorAll('.hiddenRight');
window.addEventListener('scroll', () => {


    const triggerHidden = window.innerHeight / 5 * 4;
    hiddenRight.forEach((hidden) => {
        const hiddenTop = hidden.getBoundingClientRect().top;
        if (hiddenTop < triggerHidden) {
            hidden.classList.add('showRight');
        }   else {
            hidden.classList.remove('showRight');
        }        
})
hiddenElements.forEach((hidden) => {
    const hiddenTopRight = hidden.getBoundingClientRect().top;
    if (hiddenTopRight < triggerHidden) {
        hidden.classList.add('showRight');
    }   else {
        hidden.classList.remove('showRight');
    }      
})
});
