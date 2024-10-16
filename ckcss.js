function toggleMenu() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("active");
}

function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("ck-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("ck-tab-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

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
