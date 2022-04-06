'use strict';

//storing all needed elements in variables
const oneStar = document.querySelector('.one-star');
let twoStar = document.querySelector('.two-star');
const threeStar = document.querySelector('.three-star');
const fourStar = document.querySelector('.four-star');
const fiveStar = document.querySelector('.five-star');
const ratingOne = document.querySelector('.one');
const ratingTwo = document.querySelector('.two');
const ratingThree = document.querySelector('.three');
const ratingFour = document.querySelector('.four');
const ratingFive = document.querySelector('.five');
const submitBtn = document.querySelector('.submit');
const rating = document.querySelector('.rating-state');
const thankYou = document.querySelector('.thank-you-state');
const message = document.querySelector('.selection');

// const allStars = document.querySelectorAll('.star');

// for (let i = 0; i <= list.length; i++) {
//     list[i].classList.add('star-bg')
    
// }


//function for submit button
const submitEvent = function (){    
    rating.classList.add('hide');
    thankYou.style.display = 'block';
};

// event handler for rating 1
ratingOne.addEventListener('click', function () {   
    oneStar.style.backgroundColor ='white'; 
    twoStar.style.display ='none';
    threeStar.style.display ='none';
    fourStar.style.display ='none';
    fiveStar.style.display ='none';

    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 1 out of 5';
    })
});

// event handler for rating 2
ratingTwo.addEventListener('click', function () {
    oneStar.style.backgroundColor ='white'; 
    twoStar.style.backgroundColor ='white'; 

    threeStar.style.display ='none';
    fourStar.style.display ='none';
    fiveStar.style.display ='none';

    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 2 out of 5';
    })
});

// event handler for rating 3
ratingThree.addEventListener('click', function () {
    oneStar.style.backgroundColor ='white'; 
    twoStar.style.backgroundColor ='white'; 
    threeStar.style.backgroundColor ='white'; 

    fourStar.style.display ='none';
    fiveStar.style.display ='none';

    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 3 out of 5';
    })
});

// event handler for rating 4
ratingFour.addEventListener('click', function () {
    oneStar.style.backgroundColor ='white'; 
    twoStar.style.backgroundColor ='white'; 
    threeStar.style.backgroundColor ='white'; 
    fourStar.style.backgroundColor ='white'; 

    fiveStar.style.display ='none';

    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 4 out of 5';
    })
});

// event handler for rating 5
ratingFive.addEventListener('click', function () {
    oneStar.style.backgroundColor ='white'; 
    twoStar.style.backgroundColor ='white'; 
    threeStar.style.backgroundColor ='white'; 
    fourStar.style.backgroundColor ='white'; 
    fiveStar.style.backgroundColor ='white'; 

    submitBtn.addEventListener('click', function () {
        submitEvent();
    message.textContent = 'You selected 5 out of 5';
    })
});

