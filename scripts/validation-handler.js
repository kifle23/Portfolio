const errorElement = document.querySelector('.form-validation-msg');
const emailInput = document.querySelector('input[type="email"]');
const submit = document.querySelector('#btn-msg');

function showError(event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = '*The email address should be in lowercase.';
    event.preventDefault();
  }
  if (!emailInput.validity.valid) {
    errorElement.textContent = '*Please enter the correct email address.';
    event.preventDefault();
  }
  setTimeout(() => {
    errorElement.textContent = '';
  }, 3000);
}

submit.addEventListener('click', showError);
