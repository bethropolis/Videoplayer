var input = document.querySelector('input');
var btn = document.querySelector('button');
var body = document.body;
btn.addEventListener('click', change);

function change(){
 q = '#'+input.value;
 body.style.backgroundColor = q; 
}
