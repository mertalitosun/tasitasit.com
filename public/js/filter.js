// cargoTypes select filter
const search = document.getElementById("search");
const searchAreas = document.querySelectorAll(".searchArea");

const searchRole = document.getElementById("searchRole");
const searchAreaRoles = document.querySelectorAll(".searchAreaRole");

const filtered = (selectValue, elements) =>{
  const filtered = selectValue.value;
  elements.forEach(element=>{
    element.parentElement.style.display = element.textContent.includes(filtered) ? "" : "none"
  })
}

search.addEventListener("change", () => {
  filtered(search,searchAreas)
});

searchRole.addEventListener("change", () => {
  filtered(searchRole,searchAreaRoles)
});

