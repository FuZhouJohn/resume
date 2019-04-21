document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
      loadingMask.classList.remove('active')
    },1000)
    makeTopNavBarSticky()
});

all.addEventListener('click', function () {
    filterBarLine.className = 'filterBarLine all'
})

framework.addEventListener('click', function () {
    filterBarLine.className = 'filterBarLine framework'
})

native.addEventListener('click', function () {
    filterBarLine.className = 'filterBarLine native'
})

window.onscroll = function(e){
    makeTopNavBarSticky()
}

// topNavBar 粘住顶部
function makeTopNavBarSticky(){
    if(window.scrollY>0){
        topNavBar.classList.add("sticky")
    }else{
        topNavBar.classList.remove("sticky")
    }
}

let topNavBarTitles = document.querySelectorAll('.topNavBar>nav>ul>li')
for(var i=0;i<topNavBarTitles.length;i++){
    topNavBarTitles[i].onmouseenter = function(e){
        var li = e.currentTarget;
        li.classList.add('active')
    }
    topNavBarTitles[i].onmouseleave = function(e){
        var li = e.currentTarget;
        li.classList.remove('active')
    }
}