const buttonAdd = document.querySelector('.button__add')
console.log(buttonAdd)
const popupAdd = document.querySelector('.popup_content_add')
const closeButtonAdd = popupAdd.querySelector('.popup__button-close')

const formAdd =popupAdd.querySelector('.popup__form_add')
console.log(formAdd)
const inputTitle = popupAdd.querySelector('.form__input_add[name="title"]');
const inputEnlace = popupAdd.querySelector('.form__input_add[name="enlace"]');


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
console.log(item)
const template = document.querySelector("#element-template").content;
const element = template.querySelector(".element").cloneNode(true);

const imageElement = element.querySelector(".element__image");
const titleElement = element.querySelector(".element__title");

const buttonTrash = element.querySelector(".button_trash");
const buttonLike = element.querySelector(".button_like");


imageElement.src = item.link
titleElement.innerText = item.name;


buttonTrash.addEventListener ("click", function(){
    element.remove();
});

buttonLike.addEventListener('click', function(){
    buttonLike.classList.toggle('button_like-black')
});

const addTitle = element.querySelector('.element__title');
const addImage = element.querySelector('.element__image');


formAdd.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(inputTitle.value)
  console.log(inputEnlace.value)
  /* const newdata = {
    title:inputTitle.value,
    link:inputEnlace.value
  }
  console.log(newdata)
 cards.push(newdata) */
 console.log(cards)
 addTitle.innerText = inputTitle.value
 addImage.src = inputEnlace.value
  togglePopup(popupAdd);


});

container.append(element);

});
  

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



/* const buttonAdd = document.querySelector('.button__add')
const popupAdd = document.querySelector('.popup_content_add')
const closeButtonAdd = popupAdd.querySelector('.popup__button-close')

const formAdd =popupAdd.querySelector('.popup_set_add')
const inputTitle = popupAdd.querySelector('.form__input_add[name="title"]');
const inputEnlace = popupAdd.querySelector('.form__input_add[name="enlace"]');
 */
console.log(buttonAdd)
buttonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});

closeButtonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});
console.log(formAdd)
/* formAdd.addEventListener('submit', function(event){
  event.preventDefault();

  const newdata = {
    title:inputTitle.value,
    link:inputEnlace.value
  }
  console.log(newdata)
 cards.push(newdata)
 console.log(cards)
  togglePopup(popupAdd);

}); */

