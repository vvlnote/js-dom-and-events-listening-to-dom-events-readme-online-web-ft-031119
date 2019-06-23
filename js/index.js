// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
})

const input = document.querySelector('input');
input.addEventListener('keydonw', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log(`${e}, not a "g"`);
  }
})
