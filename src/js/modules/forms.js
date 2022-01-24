import { formValidation } from './formValidation';
import { postData } from '../services/requests';
import { showThanksModal } from './showThanksModal';

function forms(formSelector, inputSelector, url) {
  const form = document.querySelector(formSelector);

  if (form) {
    const inputs = [...form.querySelectorAll(inputSelector)];

    formValidation(form, inputSelector, false);

    function bindForm(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        formValidation(form, inputSelector, true);

        if (inputs.every((input) => !input.classList.contains('error'))) {
          const formData = new FormData(form);

          postData(url, formData)
            .then((response) => showThanksModal(response.message))
            .catch((error) => showThanksModal(error.message, true))
            .finally(() => form.reset());
        }
      });
    }

    bindForm(form);
  }
}

export default forms;
