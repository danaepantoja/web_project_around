import {togglePopup, Card} from "./script/card.js";
import { FormValidator } from "./script/FormValidator.js";

const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_content_add");
const closeButtonAdd = popupAdd.querySelector(".popup__button-close");

const formAdd = popupAdd.querySelector(".popup__form_add");
const inputTitle = popupAdd.querySelector('.form_input_add[name="title"]');
const inputEnlace = popupAdd.querySelector('.form_input_add[name="enlace"]');

const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup_content_edit-profile");
const closeButton = popupProfile.querySelector(".popup__button-close");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = popupProfile.querySelector('.form_input[name="name"]'); 
const inputJob = popupProfile.querySelector('.form_input[name="job"]');

const container = document.querySelector(".elements");

const popupImage = document.querySelector(".popup_content_image");
const closeButtonImage = popupImage.querySelector(".popup__button-close");

const forms = Array.from(document.querySelectorAll(".popup__form"));

const configForm = {
  submitButtonSelector: '.save', 
  inputSelector: '.form_input',
  submitButtonDisabledClass: 'save_disabled'
};

const renderCard = (name, link, alt) => {
  const template = document.querySelector("#element-template").content;
  const element = template.querySelector(".element").cloneNode(true);

  const imageElement = element.querySelector(".element__image");
  const titleElement = element.querySelector(".element__title");

  const buttonTrash = element.querySelector(".button_trash");
  const buttonLike = element.querySelector(".button_like");

  const openImage = element.querySelector(".element__image")

  titleElement.innerText = name;
  imageElement.src = link;
  imageElement.alt = name; 
 

  buttonTrash.addEventListener("click", function () {
    element.remove();
  });

  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("button_like-black");
  });

  openImage.addEventListener("click", function () {
 
    document.querySelector(".image-grand").src = link;
    document.querySelector(".image-grand").alt = name;
    document.querySelector(".image-text").innerText = name;
    togglePopup(popupImage);
  });  
  
  container.prepend(element);
};

buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});

closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  togglePopup(popupProfile);
}); 


buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

closeButtonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (popupImage.classList.contains('popup_show')) {
      togglePopup(popupImage);
    }
    if (popupAdd.classList.contains('popup_show')) {
      togglePopup(popupAdd);
    }
    if (popupProfile.classList.contains('popup_show')) {
      togglePopup(popupProfile);
    }
  }
});

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = new Card(inputTitle.value, inputEnlace.value).getElement();
  container.prepend(card);
  formAdd.reset();
  togglePopup(popupAdd);
});

closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

Card.forEach(function (item) {
  renderCard(item.name, item.link, item.alt);
});