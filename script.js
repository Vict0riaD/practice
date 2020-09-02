'use strict';
const box = document.getElementById('box'),
      btms = document.getElementsByTagName('button'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.circle');
box.style.backgroundColor = 'blue';
box.style.width = '500px';
// btms[1].style.borderRadius = '100%';
// btms[0].style.backgroundColor = 'red';
box.style.cssText = 'background color: blue; withd: 500px';