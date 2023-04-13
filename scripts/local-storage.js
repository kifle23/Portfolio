const fullNameInput = document.querySelector('#full-name');
const emailInputS = document.querySelector('input[type=email]');
const messageInput = document.querySelector('#form-message');
const resetForm = document.querySelector('button[type="reset"]');
const inputCollection = { name: '', email: '', message: '' };
const submitBtn = document.querySelector('#btn-msg');
const validationMsg = document.querySelector('#alert');

if (localStorage.contactForm) {
  inputCollection.name = JSON.parse(localStorage.contactForm).name;
  inputCollection.email = JSON.parse(localStorage.contactForm).email;
  inputCollection.message = JSON.parse(localStorage.contactForm).message;
  fullNameInput.value = inputCollection.name;
  emailInputS.value = inputCollection.email;
  messageInput.value = inputCollection.message;
}

fullNameInput.addEventListener('input', () => {
  inputCollection.name = fullNameInput.value;
  localStorage.setItem('contactForm', JSON.stringify(inputCollection));
});

emailInputS.addEventListener('input', () => {
  inputCollection.email = emailInputS.value;
  localStorage.setItem('contactForm', JSON.stringify(inputCollection));
});

messageInput.addEventListener('input', () => {
  inputCollection.message = messageInput.value;
  localStorage.setItem('contactForm', JSON.stringify(inputCollection));
});

resetForm.addEventListener('click', () => {
  validationMsg.className = '';
  if (localStorage.contactForm) {
    localStorage.clear();
    validationMsg.textContent = 'Form data successfully cleared from local storage!';
    validationMsg.classList.add('form-deletion-success-msg');
  } else {
    validationMsg.textContent = 'Oops, there is no data on local storage please submit data!';
    validationMsg.classList.add('form-validation-msg');
  }
  setTimeout(() => {
    validationMsg.textContent = '';
  }, 3000);
});
submitBtn.addEventListener('click', () => {
  if (localStorage.contactForm) {
    validationMsg.className = '';
    validationMsg.textContent = 'Form data successfully saved to local storage!';
    validationMsg.classList.add('form-Submission-success-msg');
  }
});
