let minIndex = 0;

switchSampleReels();
setTimeout(()=>{
    highlightCurrent();
},1)

let regions = document.querySelectorAll("[data-x]");
  for (var i = 0; i < regions.length; i++) {
    regions[i].classList.add('offset')
  }
document.addEventListener("DOMContentLoaded", function() {
  loadingMask.classList.remove("active");
  makeTopNavBarSticky();
});

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

// var y = window.scrollY;
// var direction = "down";
window.onscroll = function(e) {
  makeTopNavBarSticky();
  highlightCurrent();
  //   if (y < window.scrollY) {
  //     direction = "down";
  //   } else {
  //     direction = "up";
  //   }
  //   y = window.scrollY;
};
var topNavBarATags = document.querySelectorAll(".topNavBar>nav>ul>li>a");
for (var i = 0; i < topNavBarATags.length; i++) {
  topNavBarATags[i].onclick = function(e) {
    var a = e.currentTarget;
    var href = a.getAttribute("href");
    if (href !== "javascrpit:void(0)") {
      e.preventDefault();
      let anchor = document.querySelector(href);
      if (anchor) {
        var s = window.scrollY;
        var e = anchor.offsetTop - 80;
        var l = e - s;
        var t = Math.abs((l / 200) * 200);
        if (t > 800) {
          t = 800;
        }
        console.log(t);
        var coords = { y: s };
        var tween = new TWEEN.Tween(coords)
          .to({ y: e }, t)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(function() {
            window.scrollTo(0, coords.y);
          })
          .start();
      }
    }
  };
}

/**
 * 切换作品集
 */
function switchSampleReels() {
  all.addEventListener("click", function() {
    filterBarLine.className = "filterBarLine all";
  });

  framework.addEventListener("click", function() {
    filterBarLine.className = "filterBarLine framework";
  });

  native.addEventListener("click", function() {
    filterBarLine.className = "filterBarLine native";
  });
}
// topNavBar 粘住顶部
function makeTopNavBarSticky() {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
}

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
    regions[i].classList.remove('offset')
  }

  let id = regions[minIndex].id;
  let li = document.querySelector('a[href="#' + id + '"]').parentNode;
  let broAndSlef = li.parentNode.children;
  for (let i = 0; i < broAndSlef.length; i++) {
    broAndSlef[i].classList.remove("highlight");
  }
  li.classList.add("highlight");
}
var topNavBarLi = document.querySelectorAll(".topNavBar>nav>ul>li");
for (var i = 0; i < topNavBarLi.length; i++) {
  topNavBarLi[i].onmouseenter = function(e) {
    var li = e.currentTarget;
    li.classList.add("active");
  };
  topNavBarLi[i].onmouseleave = function(e) {
    var li = e.currentTarget;
    li.classList.remove("active");
  };
}
