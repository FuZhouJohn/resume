!function() {
    var view = document.querySelector("#loadingMask");
    var controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function() {
            document.addEventListener("DOMContentLoaded", () => {
                this.view.classList.remove("active");
            });
        }
    };
    controller.init(view);
}.call();
