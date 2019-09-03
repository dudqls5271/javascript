const btn = document.querySelector('#btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('#modal-close-btn');

const btn1 = document.querySelector('#btn1');
const modal1 = document.querySelector('.modal-container1');
const modalCloseBtn1 = document.querySelector('#modal-close-btn1');

btn.addEventListener('click', (e) => {
    modal.style.display = 'flex';
});

modalCloseBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) {
        modal.style.display = 'none';
    }
});
/*----------------------------------------------------------*/
btn1.addEventListener('click', (e) => {
    modal1.style.display = 'flex';
});

modalCloseBtn1.addEventListener('click', (e) => {
    modal1.style.display = 'none';
});

modal1.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container1')) {
        modal1.style.display = 'none';
    }
});