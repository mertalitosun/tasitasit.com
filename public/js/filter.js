const filterInput = document.getElementById("filterInput");
const table = document.getElementById("table");
const rows = table.getElementsByTagName("tr");
const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
  var filter = filterInput.value.toLowerCase();
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");
    var shouldHide = true;

    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];

      if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
        shouldHide = false;
        break;
      }
    }

    if (shouldHide) {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
  }
});

filterInput.addEventListener("input", ()=>{
    var filter = filterInput.value.toLowerCase();
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");
    var shouldHide = true;

    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];

      if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
        shouldHide = false;
        break;
      }
    }

    if (shouldHide) {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
  }
})