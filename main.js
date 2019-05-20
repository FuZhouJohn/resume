let minIndex = 0;

setTimeout(() => {
    highlightCurrent();
}, 0);

let regions = document.querySelectorAll("[data-x]");
for (var i = 0; i < regions.length; i++) {
    regions[i].classList.add("offset");
}
document.addEventListener("DOMContentLoaded", function() {
    loadingMask.classList.remove("active");
});



window.addEventListener("scroll", function(e) {
    highlightCurrent();
});



function highlightCurrent() {
    let regions = document.querySelectorAll("[data-x]");
    for (var i = 0; i < regions.length; i++) {
        if (
            Math.abs(regions[i].offsetTop - window.scrollY) <
                Math.abs(regions[minIndex].offsetTop - window.scrollY) &&
            Math.abs(regions[i].offsetTop - window.scrollY) < 400
        ) {
            minIndex = i;
        }
    }
    for (var i = 0; i <= minIndex; i++) {
        regions[i].classList.remove("offset");
    }

    let id = regions[minIndex].id;
    let li = document.querySelector('a[href="#' + id + '"]').parentNode;
    let broAndSlef = li.parentNode.children;
    for (let i = 0; i < broAndSlef.length; i++) {
        broAndSlef[i].classList.remove("highlight");
    }
    li.classList.add("highlight");
}

