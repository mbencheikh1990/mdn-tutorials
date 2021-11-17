// ------- WEBPAGE-IMAGE-CHANGER-EVENT -------

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySource = myImage.getAttribute("src");
  if (mySource === "../first-webpage/images/firefox-logo.png") {
    myImage.setAttribute("src", "../first-webpage/images/lizard-fox.png")
  } else {
      myImage.setAttribute("src", "../first-webpage/images/firefox-logo.png");
    }
}
// -------------------------------------------

// --------- WEBPAGE-HEADING-CHANGER-EVENT -------

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `MDN Web Docs helped me make this page, ${myName}!`;
  }
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `MDN Web Docs helped me make this page, ${storedName}!`;
}

myButton.onclick = function() {
  setUserName();
}
// ------------------------------------------------