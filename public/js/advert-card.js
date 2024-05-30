const accordionButtons = document.querySelectorAll(".accordion-button");
const advertDetailBtn = document.querySelectorAll(".advertDetailBtn");

accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {
        const targetId = accordionButton.getAttribute("data-bs-target");
        const advertDetailBtn = document.querySelector(`#advertDetailBtn[data-bs-target="${targetId}"]`);
        if (advertDetailBtn) {
            if (advertDetailBtn.innerHTML.trim() === "Detayları Göster" || advertDetailBtn.innerHTML.trim() === "İncele") {
                advertDetailBtn.innerHTML = "Detayları Gizle";
            } else if(advertDetailBtn.innerHTML.trim() === "Detayları Gizle") {
                advertDetailBtn.innerHTML = "Detayları Göster";
            }
        }
    });
});

advertDetailBtn.forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {
        const targetId = accordionButton.getAttribute("data-bs-target");
        const advertDetailBtn = document.querySelector(`#advertDetailBtn[data-bs-target="${targetId}"]`);
        if (advertDetailBtn) {
            if (advertDetailBtn.innerHTML.trim() === "Detayları Göster") {
                advertDetailBtn.innerHTML = "Detayları Gizle";
            } else if(advertDetailBtn.innerHTML.trim() === "Detayları Gizle"){
                advertDetailBtn.innerHTML = "Detayları Göster";
            }
        }
    });
});


const click = () =>{
    
}