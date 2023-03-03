const menuBtn = document.querySelector(".menu");

const menus = document.querySelector(".menus");

const menuChildren = menus.children;

const navList = document.querySelector(".menus");
menuBtn.addEventListener("click", function () {
  navList.classList.toggle("leftMe");
  console.log("hello");
});
console.log(menuChildren.item(1));

for (i = 0; i < menuChildren.length; i++) {
  menuChildren.item(i).addEventListener("click", function () {
    navList.classList.remove("leftMe");
  });
}

document.querySelectorAll(`a[href^="#"]`).forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// const navbar = document.getElementById("navbar");
// window.addEventListener("scroll", function () {
//   const scrolling = window.scrollY;
//   const scrollingX = window.scrollX;
//   if (scrolling) {
//     navbar.style.visibility = "visible";
//     navbar.style.position = "fixed";
//     navbar.style.transition = ".3s";
//   } else {
//     setInterval(function () {
//       navbar.style.visibility = "hidden";
//     }, 3000);
//   }
// });
