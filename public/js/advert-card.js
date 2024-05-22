const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {
        const targetId = accordionButton.getAttribute("data-bs-target");
        const advertDetailBtn = document.querySelector(`#advertDetailBtn[data-bs-target="${targetId}"]`);
        if (advertDetailBtn) {
            if (advertDetailBtn.innerHTML.trim() === "Detayları Göster") {
                advertDetailBtn.innerHTML = "Detayları Gizle";
            } else {
                advertDetailBtn.innerHTML = "Detayları Göster";
            }
        }
    });
});
