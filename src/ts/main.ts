'use strict';

//Variables previewCard
const previewName = document.querySelector('.js-cardName') as HTMLHeadingElement;
const previewJob = document.querySelector('.js-cardJob') as HTMLHeadingElement;
const previewMobile = document.querySelector('.js-mobileLink') as HTMLAnchorElement;
const previewMail = document.querySelector('.js-mailLink') as HTMLAnchorElement;
const previewLinkedin = document.querySelector('.js-linkedinLink') as HTMLAnchorElement;
const previewGithub = document.querySelector('.js-githubLink') as HTMLAnchorElement;
const formContainer = document.querySelector('.js-formContainer') as HTMLElement;
const previewCard = document.querySelector('.js-card') as HTMLElement;

//Variables Design
const palette1 = document.querySelector('.js_palette1') as HTMLInputElement;
const palette2 = document.querySelector('.js_palette2') as HTMLInputElement;
const palette3 = document.querySelector('.js_palette3') as HTMLInputElement;
const formDesign = document.querySelector('.formDesign') as HTMLFieldSetElement;

//Variables Fill
const inputName = document.querySelector('.js_inputName') as HTMLInputElement;
const inputJob = document.querySelector('.js_inputJob') as HTMLInputElement;
const inputMobile = document.querySelector('.js_inputPhone') as HTMLInputElement;
const inputMail = document.querySelector('.js_inputEmail') as HTMLInputElement;
const inputLinkedin = document.querySelector('.js_inputLinkedin') as HTMLInputElement;
const inputGithub = document.querySelector('.js_inputGithub') as HTMLInputElement;
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
