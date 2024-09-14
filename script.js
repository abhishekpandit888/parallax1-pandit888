// let text = document.getElementById("text");
// let leaf = document.getElementById("leaf");
// let hill1 = document.getElementById("hill1");
// let hill4 = document.getElementById("hill4");
// let hill5 = document.getElementById("hill5");

// window.addEventListener("scroll", () => {
//   let value = window.scrollY;

//   text.style.marginTop = value * 2.5 + "px";
//   leaf.style.top = value * -1.5 + "px";
//   leaf.style.left = value * 1.5 + "px";
//   hill5.style.left = value * 1.5 + "px";
//   hill4.style.left = value * -1.5 + "px";
//   hill1.style.top = value * 1 + "px";
// });

let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let isAtTop = true;
let isAtBottom = false;

function updateParallax() {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";

  // Check if user is at the top of the page
  if (value === 0) {
    isAtTop = true;
  } else {
    isAtTop = false;
  }

  // Check if user is at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    isAtBottom = true;
  } else {
    isAtBottom = false;
  }

  // Toggle parallax effect based on user's position
  if (isAtTop || isAtBottom) {
    disableParallax();
  } else {
    enableParallax();
  }
}

function disableParallax() {
  text.style.marginTop = "0px";
  leaf.style.top = "0px";
  leaf.style.left = "0px";
  hill5.style.left = "0px";
  hill4.style.left = "0px";
  hill1.style.top = "0px";
}

function enableParallax() {
  text.style.marginTop = window.scrollY * 2.5 + "px";
  leaf.style.top = window.scrollY * -1.5 + "px";
  leaf.style.left = window.scrollY * 1.5 + "px";
  hill5.style.left = window.scrollY * 1.5 + "px";
  hill4.style.left = window.scrollY * -1.5 + "px";
  hill1.style.top = window.scrollY * 1 + "px";
}

// Add event listener for scroll
window.addEventListener("scroll", updateParallax);
