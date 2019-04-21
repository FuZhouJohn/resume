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

var topNavBarLi = document.querySelectorAll('.topNavBar>nav>ul>li')
for(var i=0;i<topNavBarLi.length;i++){
    topNavBarLi[i].onmouseenter = function(e){
        var li = e.currentTarget;
        li.classList.add('active')
    }
    topNavBarLi[i].onmouseleave = function(e){
        var li = e.currentTarget;
        li.classList.remove('active')
    }
}
var topNavBarATags = document.querySelectorAll('.topNavBar>nav>ul>li>a')
for(var i=0;i<topNavBarATags.length;i++){
    topNavBarATags[i].onclick = function(e){
        var a = e.currentTarget
        var href = a.getAttribute('href')
        if(href !== 'javascrpit:void(0)'){
            e.preventDefault()
            let anchor = document.querySelectorAll(href)[0]
            if(anchor){
                window.scrollTo({"behavior": "smooth", "top": anchor.offsetTop - 90})
            }
        }
    }
}