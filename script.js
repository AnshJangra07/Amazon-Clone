// function showLoginForm() {
//    document.getElementById('login-form').style.display = 'block';
//    document.getElementById('register-form').style.display = 'none';
//    document.getElementById('welcome').style.display = 'none';
// }

// function showRegisterForm() {
//    document.getElementById('login-form').style.display = 'none';
//    document.getElementById('register-form').style.display = 'block';
//    document.getElementById('welcome').style.display = 'none';
// }


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


// document.addEventListener("DOMContentLoaded", () => {
//    const mobileMenu = document.getElementById('mobile-menu');
//    const navMenu = document.querySelector('nav ul');

//    mobileMenu.addEventListener('click', () => {
//        navMenu.classList.toggle('open');
//    });

//    // Example: smooth scrolling for navigation
//    document.querySelectorAll('nav ul li a').forEach(anchor => {
//        anchor.addEventListener('click', function (e) {
//            e.preventDefault();

//            const target = document.querySelector(this.getAttribute('href'));
//            target.scrollIntoView({
//                behavior: 'smooth'
//            });
//            navMenu.classList.remove('open');  // Close menu on link click
//        });
//    });
// });



document.addEventListener("DOMContentLoaded", () => {
   // Example: smooth scrolling for navigation
   document.querySelectorAll('nav ul li').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           const target = document.querySelector(this.getAttribute('href'));
           target.scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
});