function toggleDropdown() {
  var dropdown = document.getElementById("header_dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

window.onclick = function (event) {
  var dropdown = document.getElementById("header_dropdown");
  var icon = document.getElementById("personal_icon_dropdown");
  if (
    !event.target.matches(".header_icon_dropdown") &&
    !event.target.matches(".personal_option_dropdown")
  ) {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};
