class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._submitButtonDisabledClass = config.submitButtonDisabledClass;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
  
    enableValidation() {
      this._setEventListeners();
    }
  

    _setEventListeners() {
      this._toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    }
  

    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._submitButtonDisabledClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._submitButtonDisabledClass);
        this._buttonElement.disabled = false;
      }
    }
  
    
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
  

    _checkInputValidity(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      if (!inputElement.validity.valid) {
        inputElement.classList.add('form_input-invalid');
        errorElement.textContent = inputElement.validationMessage;
      } else {
        inputElement.classList.remove('form_input-invalid');
        errorElement.textContent = '';
      }
    }
  }
  

  const configForm = {
    inputSelector: '.form_input',
    submitButtonSelector: '.save',
    submitButtonDisabledClass: 'save_disabled',
  };
  

  const formElement = document.querySelector('.popup__form');
  

  const formValidator = new FormValidator(configForm, formElement);
  

  formValidator.enableValidation();

  export class FormValidator {
    constructor(config, formElement) {
    }
  
    enableValidation() {
    }
  
  }