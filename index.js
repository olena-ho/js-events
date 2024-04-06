const timing = () => {
  const object = document.getElementById('button-order'); 
  object.textContent = 'Objednat';
};

setTimeout(timing, 3000);

const changeText = () => {
  const object = document.getElementById('button-order');
  object.textContent = 'Objednáno'
}

const button = document.querySelector('button')
button.addEventListener('click', changeText)


