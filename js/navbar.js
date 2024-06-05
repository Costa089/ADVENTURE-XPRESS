window.addEventListener("scroll", function() {
  const navbar = this.document.getElementById("navbar");
  const img = document.getElementById("imgParapendio");
  let heightImg = img.offsetHeight; //prendo l'altezza dell'immagine
  let heightNav = navbar.offsetHeight;

  //controllo a che altezza Y sono con lo scroll e di conseguenza modifico la navbar
  if (this.scrollY >= heightImg - heightNav) {
    navbar.classList.remove("shadow-sm");
    navbar.classList.remove("bg-header");
    navbar.style.backgroundColor = "lightgrey";
  } else if (this.scrollY < heightImg - heightNav) {
    navbar.classList.add("shadow-sm");
    navbar.classList.add("bg-header");
    navbar.style.backgroundColor = "rgba(211, 211, 211, 0.6)";
  }
});