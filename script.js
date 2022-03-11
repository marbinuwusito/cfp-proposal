const theme = document.querySelector('.icon');
const submitButton = document.getElementById('submit-button');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const comment = document.getElementById('comment');

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (theme.getAttribute("class") === "fa-solid fa-sun icon") {
    theme.setAttribute("class", "fa-solid fa-moon icon")
  } else {
    theme.setAttribute("class", "fa-solid fa-sun icon")
  }
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputEmail.value, inputName.value, comment.value);
  inputEmail.value = '';
  inputName.value = '';
  comment.value = '';
})