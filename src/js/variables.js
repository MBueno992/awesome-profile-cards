'use strict';

//Variables previewCard
const previewName = document.querySelector('.js-cardName');
const previewJob = document.querySelector('.js-cardJob');
const previewMobile = document.querySelector('.js-mobileLink');
const previewMail = document.querySelector('.js-mailLink');
const previewLinkedin = document.querySelector('.js-linkedinLink');
const previewGithub = document.querySelector('.js-githubLink');
const formContainer = document.querySelector('.js-formContainer');
const previewCard = document.querySelector('.js-card');

//Variables Design
const palette1 = document.querySelector('.js_palette1');
const palette2 = document.querySelector('.js_palette2');
const palette3 = document.querySelector('.js_palette3');
const formDesign = document.querySelector('.formDesign');

//Variables Fill
const inputName = document.querySelector('.js_inputName');
const inputJob = document.querySelector('.js_inputJob');
const inputMobile = document.querySelector('.js_inputPhone');
const inputMail = document.querySelector('.js_inputEmail');
const inputLinkedin = document.querySelector('.js_inputLinkedin');
const inputGithub = document.querySelector('.js_inputGithub');
const form = document.querySelector('.formStyle');
const size = document.querySelector('.js-size');

//Variables Share
const createLink = document.querySelector('.js-shareHidden');
const btnOrange = document.querySelector('.js-btnOrange');
const linkCard = document.querySelector('.js-linkCard');
const shareError = document.querySelector('.js-shareError');
const urlTwitter = document.querySelector('.js-twitter');

//Objeto
const data = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const newData = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};
