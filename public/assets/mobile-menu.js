window.addEventListener("load", function() {
  document.getElementById("menu-button").addEventListener("click", function() {
    menu = document.getElementById("menu");
    if (menu.style.display !== "flex") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
});
