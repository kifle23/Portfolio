const errorElement = document.querySelector('#alert');
const emailInput = document.querySelector('input[type="email"]');
const fullNameInputv = document.querySelector('#full-name');
const messageInputv = document.querySelector('#form-message');
const submit = document.querySelector('#btn-msg');

function showError(event) {
  errorElement.className = '';
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.classList.add('form-validation-msg');
    errorElement.textContent = '*The email address should be in lowercase.';
    event.preventDefault();
  } else if (
    emailInput.value === ''
    || fullNameInputv.value === ''
    || messageInputv.value === ''
  ) {
    errorElement.classList.add('form-validation-msg');
    errorElement.textContent = '*All fields are required! Please enter a value';
    event.preventDefault();
  }
  setTimeout(() => {
    errorElement.textContent = '';
  }, 3000);
}

submit.addEventListener('click', showError);
