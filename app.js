'use strict';

//storing all needed elements in variables
const ratingOne = document.querySelector('.one');
const ratingTwo = document.querySelector('.two');
const ratingThree = document.querySelector('.three');
const ratingFour = document.querySelector('.four');
const ratingFive = document.querySelector('.five');
const submitBtn = document.querySelector('.submit');
const rating = document.querySelector('.rating-state');
const thankYou = document.querySelector('.thank-you-state');
const message = document.querySelector('.selection');

//function for submit button
const submitEvent = function (){    
    rating.classList.add('hide');
    thankYou.style.display = 'block';
};

// event handler for rating 1
ratingOne.addEventListener('click', function () {
    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 1 out of 5';
    })
});

// event handler for rating 2
ratingTwo.addEventListener('click', function () {
    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 2 out of 5';
    })
});

// event handler for rating 3
ratingThree.addEventListener('click', function () {
    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 3 out of 5';
    })
});

// event handler for rating 4
ratingFour.addEventListener('click', function () {
    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 4 out of 5';
    })
});

// event handler for rating 5
ratingFive.addEventListener('click', function () {
    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 5 out of 5';
    })
});