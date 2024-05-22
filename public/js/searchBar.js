const searchBar = document.getElementById("searchBar");
const searchAreas = document.querySelectorAll(".searchBarArea");

searchBar.addEventListener("input", () => {
  const filter = searchBar.value.toLowerCase();

  searchAreas.forEach((searchArea) => {
    const searchAreaText = searchArea.textContent.toLowerCase();
    searchArea.style.display = searchAreaText.includes(filter) ? "" : "none"
  });
});
