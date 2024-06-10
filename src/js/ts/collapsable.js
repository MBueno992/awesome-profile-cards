'use strict';
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
