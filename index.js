const buttonEdit = document.querySelector('.edit__button')
const popupProfile = document.querySelector('.popup_content_edit-profile')
const closeButton = popupProfile.querySelector('.popup__button-close')

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile =popupProfile.querySelector('.popup__form')
const inputName = popupProfile.querySelector('.form__input[name="name"]');
const inputJob = popupProfile.querySelector('.form__input[name="job"]');

function togglePopup(popup){
    popupProfile.classList.toggle('popup_show')
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

function togglePopup(popup){
    popupAdd.classList.toggle('popup_show_add')
}

buttonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});

closeButtonAdd.addEventListener('click', function(){
    togglePopup(popupAdd);
});