const btnBar = document.getElementById("btn2");
const motherTag = document.getElementById("mother");
const locationTag = document.getElementById("location1");
const iconTag = document.getElementById("icon");

btnBar.addEventListener("click", () => {
  motherTag.style.opacity = "0.4";
  motherTag.style.filter = "blur(10px)";
  locationTag.style.display = "block";
});

iconTag.addEventListener("click", () => {
  motherTag.style.opacity = "1";
  locationTag.style.display = "none";
  motherTag.style.filter = "blur(0px)";
});

const sideBarTag = document.querySelector(".sideBar");
const tilteBar = document.querySelector("#title1");
sideBarTag.addEventListener("click", () => {
  console.log("hello");
  if (tilteBar.classList.contains("shows")) {
    tilteBar.classList.remove("shows");
    tilteBar.style.display = "none";
  } else {
    tilteBar.classList.add("shows");
    tilteBar.style.display = "block";
  }
});
