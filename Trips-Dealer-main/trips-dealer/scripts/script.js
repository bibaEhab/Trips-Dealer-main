document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove the active class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Add the active class to the clicked nav item
      item.classList.add("active");
    });
  });
});
