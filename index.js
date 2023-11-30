const buttonEdit = document.querySelector('.edit__button')
const popupProfile = document.querySelector('.popup_content_edit-profile')
const closeButton = popupProfile.querySelector('.popup__button-close')

function togglePopup(popup){
    popupProfile.classList.toggle('popup_show')
}

buttonEdit.addEventListener('click', function(){
    togglePopup(popupProfile);
});

closeButton.addEventListener('click', function(){
    togglePopup(popupProfile);
});