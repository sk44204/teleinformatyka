const deg2rad = deg => deg * Math.PI/180;
const init = (ev,a) => {
console.log('Container:',document.getElementById('container'));
console.log(ev);
console.log(deg2rad(a));
console.log('Children:',document.getElementById('container').children);
}

window.addEventListener('DOMContentLoaded', x => init(x,90));
