const btnCopy = document.querySelectorAll(".btnCopy");

btnCopy.forEach(function (button, index) {
  button.addEventListener("click", function () {
    var input = document.querySelectorAll(".form-control")[index];
    navigator.clipboard
      .writeText(input.value)
      .then(function () {
        alert("Metin panoya kopyalandı");
      })
      .catch(function (err) {
        console.error("Metin kopyalanırken bir hata oluştu:", err);
      });
  });
});
