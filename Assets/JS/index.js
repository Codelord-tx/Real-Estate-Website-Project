let body = document.body;
let nav = document.getElementsByTagName("nav")[0];

window.onscroll = () => {
  myFunction();
};

function myFunction() {
  if (body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    // body.style.backgroundColor = "rgb(240, 240, 220)";
    nav.classList.add("scrolledUp");
    // nav.style.backgroundColor = "green";
  } else {
    nav.classList.remove("scrolledUp");
    // body.style.backgroundColor = "white";
  }
}
