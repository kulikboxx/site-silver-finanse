import { emailValidation } from './emailValidation';
import { hideAlertError } from './hideAlertError';
import { showAlertError } from './showAlertError';
import { trimInputValue } from './trimInputValue';

function formValidation(form, inputSelector, submit = false) {
  const inputs = [...form.querySelectorAll(inputSelector)];

  const errorMessages = {
    required: 'To pole jest wymagane',
    phone: 'Wpisz 9-cyfrowy numer telefonu',
    email: 'Wpisz poprawny adres e-mail',
    select: 'Wybierz jakąś opcję z listy',
  };

  if (submit) {
    inputs.forEach((input) => {
      if ((input.type === 'radio' && !input.checked) || (input.type === 'checkbox' && !input.checked)) {
        showAlertError(input);

        if (inputs.some((input) => input.checked)) {
          inputs.forEach((input) => input.type === 'radio' && input.classList.remove('error'));
        }

        return;
      }

      if (
        (input.type === 'text' && input.value === '') ||
        (input.type === 'tel' && input.value === '') ||
        (input.type === 'email' && input.value === '')
      ) {
        showAlertError(input, errorMessages.required);
        return;
      }

      if (input.type === 'select-one' && !input.selectedIndex) {
        showAlertError(input, errorMessages.select);
        return;
      }
    });
  } else {
    checkInputs(inputs, 'input');
  }

  function checkInputs(inputs, event) {
    inputs.forEach((input) => {
      input.addEventListener(event, () => {
        trimInputValue(input);

        if (input.name === 'name' || input.name === 'source') {
          input.value = input.value.replace(/[а-яёі&\/\\#,+()$~%.'-=":*?!@<>{}\[\]\^\&\_\|']+/gi, '');
        }

        if (input.name === 'surname' || input.name === 'city') {
          input.value = input.value.replace(/[а-яёі&\/\\#,+()$~%.'=":*?!@<>{}\[\]\^\&\_\|']+/gi, '');
        }

        if (input.name === 'date') {
          input.value = input.value.replace(/[а-яёіa-z&\/\\#,+()$~%.'=":*?!@<>{}\s\[\]\^\&\_\|']/gi, '');
        }

        if (input.name === 'period') {
          input.value = input.value.replace(/[а-яёі&\/\\#,+()$~%.'=":*?!@<>{}\[\]\^\&\_\|']/gi, '');
        }

        if (
          input.name === 'amount' ||
          input.name === 'age' ||
          input.name === 'phone' ||
          input.name === 'salary' ||
          input.name === 'sum1' ||
          input.name === 'sum2'
        ) {
          input.value = input.value.replace(/\D/gi, '');
        }

        if (
          (input.type === 'radio' && !input.checked) ||
          (input.type === 'radio' && input.checked) ||
          (input.type === 'checkbox' && !input.checked)
        ) {
          showAlertError(input);

          if (inputs.some((input) => input.checked)) {
            inputs.forEach((input) => input.type === 'radio' && input.classList.remove('error'));
          }

          return;
        }

        if (input.type === 'text' && input.value.length < 2 && input.name !== 'sum1' && input.name !== 'sum2') {
          showAlertError(input, errorMessages.required);
          return;
        }

        if ((input.name === 'sum1' && input.value.length < 1) || (input.name === 'sum2' && input.value.length < 1)) {
          showAlertError(input, errorMessages.required);
          return;
        }

        if (input.type === 'tel' && (input.value.length < 9 || input.value.length > 9)) {
          showAlertError(input, errorMessages.phone);
          return;
        }

        if (input.type === 'email' && !emailValidation(input)) {
          showAlertError(input, errorMessages.email);
          return;
        }

        if (input.type === 'select-one' && !input.selectedIndex) {
          showAlertError(input, errorMessages.select);
          return;
        }

        hideAlertError(input);
      });
    });
  }
}

export { formValidation };
