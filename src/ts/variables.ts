'use strict';

//Variables previewCard
const previewCard = document.querySelector('.js-card') as HTMLElement;
const previewName = document.querySelector('.js-cardName') as HTMLHeadingElement;
const previewJob = document.querySelector('.js-cardJob') as HTMLHeadingElement;
const profileImage = document.querySelector('.js-profileImage') as HTMLDivElement;
const previewMobile = document.querySelector('.js-mobileLink') as HTMLAnchorElement;
const previewMail = document.querySelector('.js-mailLink') as HTMLAnchorElement;
const previewLinkedin = document.querySelector('.js-linkedinLink') as HTMLAnchorElement;
const previewGithub = document.querySelector('.js-githubLink') as HTMLAnchorElement;
const reset = document.querySelector('.js-cardReset') as HTMLButtonElement;

//Variables Design
const palette1 = document.querySelector('.js_palette1') as HTMLInputElement;
const palette2 = document.querySelector('.js_palette2') as HTMLInputElement;
const palette3 = document.querySelector('.js_palette3') as HTMLInputElement;
const formDesign = document.querySelector('.formDesign') as HTMLFieldSetElement;

//Variables Fill
const formContainer = document.querySelector('.js-formContainer') as HTMLElement;
const inputName = document.querySelector('.js_inputName') as HTMLInputElement;
const inputJob = document.querySelector('.js_inputJob') as HTMLInputElement;
const profilePreview = document.querySelector(".js_miniPreview") as HTMLDivElement;

const inputMobile = document.querySelector('.js_inputPhone') as HTMLInputElement;
const inputMail = document.querySelector('.js_inputEmail') as HTMLInputElement;
const inputLinkedin = document.querySelector('.js_inputLinkedin') as HTMLInputElement;
const inputGithub = document.querySelector('.js_inputGithub') as HTMLInputElement;
const form = document.querySelector('.formStyle');
const size = document.querySelector('.js-size');

//Variables Share
const generateLink = document.querySelector('.js-generateLink') as HTMLDivElement;
const btnOrange = document.querySelector('.js-createBtn') as HTMLButtonElement;
const linkCard = document.querySelector('.js-linkCard') as HTMLAnchorElement;
const errorMsg = document.querySelector('.js-errorMsg') as HTMLParagraphElement;
const urlTwitter = document.querySelector('.js-twitter') as HTMLAnchorElement;

//Colapsable
const fieldset = document.querySelectorAll('.js-fieldset');
const mainOption = document.querySelectorAll('.js-options');
const fill = document.querySelector('.js-fill');
const design = document.querySelector('.js-design');
const share = document.querySelector('.js-share');

//Otras
// const select1 = document.querySelector(".js-select1");

const refresh = JSON.parse(localStorage.getItem("data"));


//Objetos

interface objectData {
  palette: number,
  [key: string]: string | number

}


const data : objectData = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

const previewCardData : Record <string, string> = {
  name: "Nombre Apellido",
  job: "Front-end developer",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "url(./images/ImageBackground.jpg)",
  photoDiv: "",
};

const newData: objectData = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};
