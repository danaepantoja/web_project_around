const cards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];
  
const container = document.querySelector(".elements");
cards.forEach(function (item) {

const template = document.querySelector("#element-template").content;
const element = template.querySelector(".element").cloneNode(true);

const imageElement = element.querySelector(".element__image");
const titleElement = element.querySelector(".element__title");

imageElement.src = item.link
titleElement.innerText = item.name

container.append(element);
})
  
const buttonEdit = document.querySelector('.edit__button')
const popupProfile = document.querySelector('.popup_content_edit-profile')
const closeButton = popupProfile.querySelector('.popup__button-close')

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile =popupProfile.querySelector('.popup__form')
const inputName = popupProfile.querySelector('.form__input[name="name"]');
const inputJob = popupProfile.querySelector('.form__input[name="job"]');

function togglePopup(popup){
    popup.classList.toggle('popup_show')
}

buttonEdit.addEventListener('click', function(){
    togglePopup(popupProfile);
});

closeButton.addEventListener('click', function(){
    togglePopup(popupProfile);
});

formProfile.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    formProfile.reset();
    togglePopup(popupProfile);
});



const buttonAdd = document.querySelector('.button__add')
const popupAdd = document.querySelector('.popup_content_add')
const closeButtonAdd = popupAdd.querySelector('.popup__button-close')

const formAdd =popupAdd.querySelector('.popup_set_add')
const inputTitle = popupAdd.querySelector('.form__input_add[name="title"]');
const inputEnlace = popupAdd.querySelector('.form__input_add[name="enlace"]');

buttonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});

closeButtonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});