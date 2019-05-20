!function() {
    var view = document.querySelectorAll(".topNavBar>nav>ul>li>a");
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.initAnimate();
            this.bindEvent();
        },
        initAnimate: function() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvent: function() {
            var view = this.view;
            for (var i = 0; i < view.length; i++) {
                view[i].addEventListener("click", e => {
                    e.preventDefault();
                    var a = e.currentTarget;
                    var href = a.getAttribute("href");
                    this.slideUp(href);
                });
            }
        },
        slideUp: function(href) {
            if (href !== "javascrpit:void(0)") {
                let anchor = document.querySelector(href);
                if (anchor) {
                    var s = window.scrollY;
                    var e = anchor.offsetTop - 80;
                    var l = e - s;
                    var t = Math.abs((l / 200) * 200);
                    if (t > 800) {
                        t = 800;
                    }
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
        }
    };
    controller.init(view);
}.call();
