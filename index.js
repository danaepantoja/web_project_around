import { enableValidation } from "./script/validate.js";
import { cards, togglePopup, Card } from "./script/cards.js";
import { configForm } from "./script/formValidator.js";
import { addEventListeners } from "./script/utils.js";

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

const renderCard = (name, link) => {
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
    document.querySelector(".image-text").innerText = name;
    togglePopup(popupImage);
  });  

  container.prepend(element);
};

addEventListeners({
  buttonEdit,
  popupProfile,
  closeButton,
  formProfile,
  profileName,
  inputName,
  profileJob,
  inputJob,
  buttonAdd,
  popupAdd,
  closeButtonAdd,
  formAdd,
  inputTitle,
  inputEnlace,
  container,
  popupImage,
  closeButtonImage,
  cards,
  renderCard,
  forms,
  enableValidation,
  configForm,
  togglePopup,
  Card
});