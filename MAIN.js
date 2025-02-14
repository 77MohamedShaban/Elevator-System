var overlay = document.getElementById("overlay");

// Buttons to 'switch' the page
var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

// The sidebars
var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

// The forms
var accountForm = document.getElementById("sign-in-info")
var signinForm = document.getElementById("sign-up-info");

// Open the Sign Up page
openSignUp = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}

// Open the Sign In page
openSignIn = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}

// When a 'switch' button is pressed, switch page
openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);

// ==============================================

var overlay2 = document.getElementById("overlay2");

// Buttons to 'switch' the page
var openSignUpButton2 = document.getElementById("slide-left-button2");
var openSignInButton2 = document.getElementById("slide-right-button2");

// The sidebars
var leftText2 = document.getElementById("sign-in2");
var rightText2 = document.getElementById("sign-up2");

// The forms
var accountForm2 = document.getElementById("sign-in-info2")
var signinForm2 = document.getElementById("sign-up-info2");

// Open the Sign Up page
openSignUp2 = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText2.classList.remove("overlay-text-left-animation-out");
  overlay2.classList.remove("open-sign-in");
  rightText2.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm2.className += " form-left-slide-out"
  rightText2.className += " overlay-text-right-animation-out";
  overlay2.className += " open-sign-up";
  leftText2.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm2.classList.remove("form-left-slide-in");
    accountForm2.style.display = "none";
    accountForm2.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm2.style.display = "flex";
    signinForm2.classList += " form-right-slide-in";
  }, 200);
}

// Open the Sign In page
openSignIn2 = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText2.classList.remove("overlay-text-left-animation");
  overlay2.classList.remove("open-sign-up");
  rightText2.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  signinForm2.classList += " form-right-slide-out";
  leftText2.className += " overlay-text-left-animation-out";
  overlay2.className += " open-sign-in";
  rightText2.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    signinForm2.classList.remove("form-right-slide-in")
    signinForm2.style.display = "none";
    signinForm2.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm2.style.display = "flex";
    accountForm2.classList += " form-left-slide-in";
  },200);
}

// When a 'switch' button is pressed, switch page
openSignUpButton2.addEventListener("click", openSignUp2, false);
openSignInButton2.addEventListener("click", openSignIn2, false);



