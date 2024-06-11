'use strict';
//Variables previewCard
const previewCard = document.querySelector('.js-card');
const previewName = document.querySelector('.js-cardName');
const previewJob = document.querySelector('.js-cardJob');
const profileImage = document.querySelector('.js-profileImage');
const previewMobile = document.querySelector('.js-mobileLink');
const previewMail = document.querySelector('.js-mailLink');
const previewLinkedin = document.querySelector('.js-linkedinLink');
const previewGithub = document.querySelector('.js-githubLink');
const reset = document.querySelector('.js-cardReset');
//Variables Design
const palette1 = document.querySelector('.js_palette1');
const palette2 = document.querySelector('.js_palette2');
const palette3 = document.querySelector('.js_palette3');
const formDesign = document.querySelector('.formDesign');
//Variables Fill
const formContainer = document.querySelector('.js-formContainer');
const inputName = document.querySelector('.js_inputName');
const inputJob = document.querySelector('.js_inputJob');
const profilePreview = document.querySelector(".js_miniPreview");
const inputMobile = document.querySelector('.js_inputPhone');
const inputMail = document.querySelector('.js_inputEmail');
const inputLinkedin = document.querySelector('.js_inputLinkedin');
const inputGithub = document.querySelector('.js_inputGithub');
const form = document.querySelector('.formStyle');
const size = document.querySelector('.js-size');
//Variables Share
const generateLink = document.querySelector('.js-generateLink');
const btnOrange = document.querySelector('.js-createBtn');
const linkCard = document.querySelector('.js-linkCard');
const errorMsg = document.querySelector('.js-errorMsg');
const urlTwitter = document.querySelector('.js-twitter');
//Colapsable
const fieldset = document.querySelectorAll('.js-fieldset');
const mainOption = document.querySelectorAll('.js-options');
const fill = document.querySelector('.js-fill');
const design = document.querySelector('.js-design');
const share = document.querySelector('.js-share');
//Otras
// const select1 = document.querySelector(".js-select1");
const refresh = JSON.parse(localStorage.getItem("data"));
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
const previewCardData = {
    name: "Nombre Apellido",
    job: "Front-end developer",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "url(./images/ImageBackground.jpg)",
    photoDiv: "",
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
