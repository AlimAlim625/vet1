const button = document.getElementById('btn-n');

let buttonClick = function() {
  return  button.textContent = 'Spasibo'
}

button.addEventListener('click', buttonClick);

