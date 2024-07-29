"use strict";
const at = () => {
  const linkGithub = inputGithub.value;
  if (linkGithub.includes("@")) {
    previewGithub.href = "https://github.com/" + linkGithub.replace(/@/, "");
  } else {
    previewGithub.href = "https://github.com/" + linkGithub;
  }
};
const linkedinFunction = () => {
  const linkedinVal = inputLinkedin.value;
  if (linkedinVal.includes("https://www.linkedin.com/in/")) {
    previewLinkedin.href = linkedinVal;
  } else if (linkedinVal.includes("linkedin.com/in/")) {
    previewLinkedin.href = "https://www." + linkedinVal;
  } else {
    previewLinkedin.href = linkedinVal;
  }
};
function handleForm(event) {
  const inputId = event.target.id;
  const inputValue = event.target.value;
  if (inputId === "name") {
    data.name = inputValue;
    previewName.innerHTML = inputName.value;
    console.log(data.name);
  } else if (inputId === "job") {
    data.job = inputValue;
    previewJob.innerHTML = inputJob.value;
  } else if (inputId === "phone") {
    data.phone = inputValue;
    previewMobile.href = "tel:" + inputMobile.value;
  } else if (inputId === "email") {
    data.email = inputValue;
    previewMail.href = "mailto:" + inputMail.value;
  } else if (inputId === "linkedin") {
    const valueLinkedin = inputValue;
    if (valueLinkedin.includes("https://www.linkedin.com/in/")) {
      data.linkedin = valueLinkedin.replace("https://www.linkedin.com/in/", "");
    } else if (valueLinkedin.includes("linkedin.com/in/")) {
      data.linkedin = valueLinkedin.replace("linkedin.com/in/", "");
    } else {
      data.linkedin = inputLinkedin.value;
    }
    linkedinFunction();
  } else if (inputId === "github") {
    const valueGitHub = inputValue;
    if (valueGitHub.includes("@")) {
      data.github = valueGitHub.replace(/@/, "");
    } else {
      data.github = inputGithub.value;
    }
    at();
  } else if (inputId === "photo") {
    data.photo;
  }
  console.log(data);
  localStorage.setItem("data", JSON.stringify(data));
}
const handleDesign = (event) => {
  const inputPalette = parseInt(event.target.value);
  previewCard.classList.remove("palette1", "palette2", "palette3");
  if (palette1.checked === true) {
    previewCard.classList.add("palette1");
  } else if (palette2.checked === true) {
    previewCard.classList.add("palette2");
  } else {
    previewCard.classList.add("palette3");
  }
  data.palette = inputPalette;
};
formContainer.addEventListener("input", handleForm);
formDesign.addEventListener("input", handleDesign);
const shareHidden = () => {
  generateLink.style.display = "flex";
  btnOrange.classList.add("btnGrey");
};
const postDataApi = (object) => {
  fetch("http://localhost:4000/createCard", {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      shareHidden();
      showURL(result);
    })
    .catch((error) => console.log(error));
};
const createCard = (event) => {
  event.preventDefault();
  if (refresh) {
    postDataApi(refresh);
  } else {
    postDataApi(data);
  }
};
btnOrange.addEventListener("click", createCard);
const showURL = (result) => {
  if (result.success) {
    linkCard.href = result.cardURL;
    linkCard.innerHTML = result.cardURL;
    urlTwitter.style.display = "flex";
    urlTwitter.href =
      "https://twitter.com/intent/tweet?text=%C2%A1Creado%20con%20Bcards!%20(crea%20la%20tuya%20en%20http%3A%2F%2Fmbueno992.github.io%2Fproject-promo-v-module-2-team-2%2F)%20Ver%20tarjeta%3A&url=" +
      result.cardURL;
    btnOrange.disabled = true;
    errorMsg.innerHTML = "La tarjeta ha sido creada: ";
  } else {
    errorMsg.innerHTML =
      "Error: revisa los datos introducidos y haz click de nuevo en Crear Tarjeta";
    btnOrange.disabled = false;
    btnOrange.classList.remove("btnGrey");
  }
};
const refreshDesign = (design) => {
  previewCard.classList.remove("palette1", "palette2", "palette3");
  if (design.palette === "1") {
    palette1.checked = true;
    previewCard.classList.add("palette1");
  } else if (design.palette === "2") {
    palette2.checked = true;
    previewCard.classList.add("palette2");
  } else if (design.palette === "3") {
    palette3.checked = true;
    previewCard.classList.add("palette3");
  }
};
function loadLocalStorage() {
  if (refresh) {
    inputName.value = refresh.name;
    inputJob.value = refresh.job;
    inputMobile.value = refresh.phone;
    inputMail.value = refresh.email;
    inputLinkedin.value = refresh.linkedin;
    inputGithub.value = refresh.github;
    previewName.innerHTML = inputName.value;
    previewJob.innerHTML = inputJob.value;
    previewMobile.href = inputMobile.value;
    previewMail.href = inputMail.value;
    previewLinkedin.href = "http://www.linkedin.com/in/" + inputLinkedin.value;
    previewGithub.href = "https://www.github.com/" + inputGithub.value;
    refreshDesign(refresh);
    profileImage.style.backgroundImage = `url(${refresh.photo})`;
    profilePreview.style.backgroundImage = `url(${refresh.photo})`;
  }
}
loadLocalStorage();
