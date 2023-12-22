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

const cards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];


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

function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

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
  formProfile.reset();
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
  renderCard(inputTitle.value, inputEnlace.value);
  formAdd.reset();
  togglePopup(popupAdd);
});

closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

cards.forEach(function (item) {
  renderCard(item.name, item.link);
});