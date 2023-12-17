window.addEventListener("scroll", () => {
    // let scrollLocation = window.scrollY;
    // console.log(scrollLocation);
    if (window.scrollY >= 60) {
      navbar.style.position = "fixed";
      navbar.style.top = "0px";
      navbar.style.zIndex = "100";
      navbar.style.width = "100%";
      navbar.style.setProperty("background", "#007aff", "important");
      navbar.classList.add("animate__animated","animate__fadeInDownBig","animate__slow-3s","bg-light");
    } else {
      navbar.style.position = "sticky";
      navbar.style.top = "0";
      navbar.style.zIndex = "100";
      navbar.style.background = "linear-gradient(100deg,#ff914d,#007aff)";
      navbar.classList.remove("animate__animated","animate__fadeInDownBig","animate__slow-3s","bg-light");
    }
  });