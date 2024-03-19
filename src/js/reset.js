'use strict';

const reset = document.querySelector('.js-cardReset');
const select1 = document.querySelector('.js-select1');

const resetData = () => {
  Object.assign(data, newData);
};
const resetColor = () => {
  previewCard.classList.remove('palette2', 'palette3');
};

const previewCardData = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: 'url(./images/ImageBackground.jpg)',
  photoDiv: '',
};

const resetCardPreview = () => {
  previewName.innerHTML = previewCardData.name;
  previewJob.innerHTML = previewCardData.job;
  previewMobile.href = previewCardData.phone;
  previewMail.href = previewCardData.email;
  previewLinkedin.href = previewCardData.linkedin;
  previewGithub.href = previewCardData.github;
  profileImage.style.backgroundImage = previewCardData.photo;
  profilePreview.style.backgroundImage = previewCardData.photoDiv;
  localStorage.removeItem('data');
};

const resetInput = () => {
  const inputsForm = document.querySelectorAll('.js-input');
  for (let i = 0; i < inputsForm.length; i++) {
    inputsForm[i].value = '';
  }
  select1.checked = true;
};

const resetForm = () => {
  resetData(data);
  resetColor();
  resetCardPreview(previewCardData);
  resetInput();
  createLink.style.display = 'none';
  btnOrange.classList.remove('btnGrey');
};

reset.addEventListener('click', resetForm);
