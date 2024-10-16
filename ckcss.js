document.querySelectorAll('.ck-accordion').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "flex";
            panel.style.alignItems = "center";
        }
    });
});

document.querySelectorAll('.ck-accordion').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = '0 16px';  // Kapanırken padding'i azalt
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = '16px';   //Açılırken padding'i artır
        }
    });
});
