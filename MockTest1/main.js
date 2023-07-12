const box = document.getElementById('box');

box.addEventListener('click', function() {
  box.classList.toggle('yellow-box');
  box.style.width = box.style.height = '600px';
});
