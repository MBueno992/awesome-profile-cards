"use strict";

const resetData = (data: objectData) => {
  Object.assign(data, newData);
};
const resetColor = () => {
  previewCard.classList.remove("palette2", "palette3");
};


const resetCardPreview = (data: Record<string,string>) => {
  previewName.innerHTML = previewCardData.name;
  previewJob.innerHTML = previewCardData.job;
  previewMobile.href = previewCardData.phone;
  previewMail.href = previewCardData.email;
  previewLinkedin.href = previewCardData.linkedin;
  previewGithub.href = previewCardData.github;
  profileImage.style.backgroundImage = previewCardData.photo;
  profilePreview.style.backgroundImage = previewCardData.photoDiv;
  localStorage.removeItem("data");
};

//En esta funcion donde pnoe palette1.checked antes ponia select1
const resetInput = () => {
  const inputsForm = Array.from(document.querySelectorAll(".js-input")) as HTMLInputElement[];
  for (let i = 0; i < inputsForm.length; i++) {
    inputsForm[i].value = "";
  }
  palette1.checked = true;
};

const resetForm = () => {
  resetData(data);
  resetColor();
  resetCardPreview(previewCardData);
  resetInput();
  generateLink.style.display = "none";
  btnOrange.classList.remove("btnGrey");
};

reset.addEventListener("click", resetForm);
