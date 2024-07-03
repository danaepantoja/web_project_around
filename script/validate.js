export function enableValidation(form , config){
  const submitButton = form.querySelector(config.submitButtonSelector);
  form.addEventListener("input", (event) => {
      const target = event.target;
      const errorNode = form.querySelector(`.form_error-${target.name}`);
      if(target.validity.valid){
      target.classList.remove(".form_input_has-error");
      errorNode.textContent = "";
      }else{
      target.classList.add(".form_input_has-error");
      errorNode.textContent = target.validationMessage;
      }
      toggleButton(form, submitButton, config);
  })
  toggleButton(form, submitButton, config);
}

function toggleButton(form, submitButton, config){
  const inputList = Array.from(form.querySelectorAll(config.inputSelector))
  if(inputList.every(input => input.validity.valid)){
    submitButton.disabled = false;
    submitButton.classList.remove(config.submitButtonDisabledClass)
  }else{
    submitButton.disabled = true;
    submitButton.classList.add(config.submitButtonDisabledClass)
  }
}