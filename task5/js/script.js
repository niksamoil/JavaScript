'use strict';

let li = document.createElement('li'),
    liSelect = document.querySelectorAll('li'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    promptSelector = document.querySelector('.prompt'),
    menu = document.querySelector('.menu');


li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

menu.append(li);


liSelect[1].textContent = 'Второй пункт';
liSelect[2].textContent = 'Третий пункт';



adv.remove();

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';


function timerPrompt() {
    let userAnswer = prompt('Ваше отношение к технике Apple?');


    promptSelector.innerHTML = userAnswer;
}

setTimeout(timerPrompt, 500);









