!function() {
    var view = document.querySelectorAll(".topNavBar>nav>ul>li");
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function() {
            var view = this.view;
            for (var i = 0; i < view.length; i++) {
                view[i].addEventListener("mouseenter", e => {
                    var li = e.currentTarget;
                    this.active(li);
                });
                view[i].addEventListener("mouseleave", e => {
                    var li = e.currentTarget;
                    this.deactive(li);
                });
            }
        },
        active: function(li) {
            li.classList.add("active");
        },
        deactive: function(li) {
            li.classList.remove("active");
        }
    };
    controller.init(view);
}.call();
