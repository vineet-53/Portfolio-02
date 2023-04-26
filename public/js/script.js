const toggleNav = document.querySelector("#navbarToggle");
const targetNavbar = document.querySelector(".nav-list");
toggleNav.addEventListener("click", () => {
  let toggleState = toggleNav.dataset.state;
  if (toggleState == "false") {
    toggleNav.dataset.state = "true";
    targetNavbar.classList.add("show");
  } else {
    toggleNav.dataset.state = "false";
    targetNavbar.classList.remove("show");
  }
});
