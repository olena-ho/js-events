const changeText = () => {
  const object = document.getElementById('button-order');
  object.textContent = 'Objednáno'
}

const button = document.querySelector('button')
button.addEventListener('click', changeText)


