// Declare all element in variable.
let sojib = document.querySelector('.sojib');
let shakib = document.querySelector('.shakib');
let raktim = document.querySelector('.raktim');
let moon = document.querySelector('.moon');
let joshim = document.querySelector('.joshim');
let jakir = document.querySelector('.jakir');
let btn = document.getElementById('btn');
let clear = document.getElementById('clear');
let image = document.querySelectorAll('img');


// Declare a array for all profile suffle.
let contest = [sojib, shakib, raktim, moon, joshim, jakir];
let contestLen = contest.length;

// suffle .
for (i = contestLen -1; i > 0; i--) {
  let j= Math.floor(Math.random() * i);
  let k = contest[i];
  contest[i] = contest[j];
  contest[j] = k;
 };
 // Suffled random number assign in variable & devided 3 group.
 let group1= contest.slice(0,2);
 let group2= contest.slice(2,4);
 let group3= contest.slice(4,6);



// Added a event listner for paired group to high opacity.
btn.addEventListener('click', () => {
  
  if (group1) {
    group1[0].querySelector('img').style = 'opacity:1';
    group1[1].querySelector('img').style = 'opacity:1';
    group1= false;
  } else if (group2 ) {
    group2[0].querySelector('img').style = 'opacity:1';
    group2[1].querySelector('img').style = 'opacity:1';
    group2= false;
  } else {
    group3[0].querySelector('img').style = 'opacity:1';
    group3[1].querySelector('img').style = 'opacity:1';
  };
});

// For clear all paired profiles
clear.addEventListener('click', () => {
  for (let i = 0; i< image.length; i++) {
    image[i].style.opacity= '0.7'
  }
})


