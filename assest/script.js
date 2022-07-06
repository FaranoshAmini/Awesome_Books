const title = document.querySelector('#title-field');
const author = document.querySelector('#author-field');
const subButton = document.querySelector('#btn-submit');
const show = document.querySelector('#book-list');

function data (){  
}
const form = document.querySelector('#book-form')
console.log(form);
form.addEventListener('submit',(event) => {
    event.preventDefault();
    show.innerHTML = title.value;
    show.innerHTML += author.value;
});