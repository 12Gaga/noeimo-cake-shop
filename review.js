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
