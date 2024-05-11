const cursor = document.querySelector('.cursor');
const a = document.querySelectorAll('a');
const body = document.querySelector('body');
body.addEventListener('mouseout',()=>{
	cursor.classList.add('hidden');
});
document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  cursor.classList.remove('hidden');
});

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click');
});

a.forEach((item) => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});
