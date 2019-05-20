!function() {
    var view = document.querySelector("#topNavBar");
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function() {
            document.addEventListener("DOMContentLoaded", () => {
                this.judgeHeight();
            });
            window.addEventListener("scroll", () => {
                this.judgeHeight();
            });
        },
        judgeHeight: function() {
            if (window.scrollY > 0) {
                this.active();
            } else {
                this.deactive();
            }
        },
        active: function() {
            var view = this.view;
            view.classList.add("sticky");
        },
        deactive: function() {
            var view = this.view;
            view.classList.remove("sticky");
        }
    };
    controller.init(view);
}.call();
