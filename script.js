'use strict';
const box = document.getElementById('box'),
    btms = document.getElementsByTagName('button'),
    circles = document.querySelectorAll('.circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
btms[1].style.borderRadius = '100%';
hearts[0].style.backgroundColor = 'red';
box.style.cssText = 'background color: blue; withd: 500px';

//
hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});
const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);
 wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend('div');
// hearts[0].before(div);
// // wrapper.insertBefore(div, hearts[0])
// hearts[1].after(div);
// circles[0].remove();
// //wrapper.removeChild(hearts[2]);
// hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[1]);
div.innerHTML = "<h1>'Hello world!'<h1>";
// div.textContent = 'hello';
div.insertAdjacentHTML('beforebegin', '<h2>Hi!<h2>');