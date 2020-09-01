function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");

  animateLinks();
}

function animateLinks() {
  var navBar = document.getElementById("navLinks");
  var navLinks = navBar.getElementsByTagName("li");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle("scaleFonts");
  }
}
