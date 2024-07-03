export function addEventListeners({
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
  }) {
   
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
  
    cards.forEach(function (item) {
      renderCard(item.name, item.link);
    });
  
    forms.forEach(form => {
      enableValidation(form, configForm)
    });
  }