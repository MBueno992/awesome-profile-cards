'use strict';
const mainOption = document.querySelectorAll('.js-options');
const fill = document.querySelector('.js-fill');
const design = document.querySelector('.js-design');
const share = document.querySelector('.js-share');
const fieldset = document.querySelectorAll('.js-fieldset');
const handleMain = (event) => {
    const formOption = event.currentTarget;
    const parent = formOption.parentNode;
    for (const titleFieldset of fieldset) {
        if (parent === titleFieldset) {
            titleFieldset.classList.remove('hidden');
        }
        else {
            titleFieldset.classList.add('hidden');
        }
    }
};
mainOption.forEach((option) => {
    option.addEventListener('click', handleMain);
});
