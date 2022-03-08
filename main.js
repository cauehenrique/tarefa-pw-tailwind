const dropdownButton = document.querySelector("#dropdown");
const dropdownContent = document.querySelector("#dropdown-content");

dropdownButton.addEventListener("click", () => {
  console.log("jahsdkjasd");
  dropdownContent.classList.toggle("!hidden");
});
