const elBody = document.querySelector('body')
const elButton = elBody.querySelector('.arrow-icon')
const elForm = elBody.querySelector('.form-box-wrapper')
elButton.addEventListener('click', function () {
  elForm.classList.toggle('form-box-off')
})
const elHeaderBtn = elBody.querySelector('.header-btn')

elHeaderBtn.addEventListener('click', function () {
  elBody.classList.toggle('dark-mode')
})
const elBtn = document.querySelector('.exit-btn')

const elModal = document.querySelector('.modal')
elBtn.addEventListener('click', function () {
  elModal.classList.add('modal__close')
})
