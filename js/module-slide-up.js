!function() {
    var view = document.querySelectorAll("[data-x]");
    var controller = {
        view: null,
        minIndex: 0,
        init: function(view) {
            this.view = view;
            this.initClass();
            this.bindEvent();
        },
        initClass: function() {
            var view = this.view;
            setTimeout(() => {
                this.highlightCurrent();
            }, 0);
            for (var i = 0; i < view.length; i++) {
                view[i].classList.add("offset");
            }
        },
        bindEvent: function() {
            window.addEventListener("scroll", () => {
                this.highlightCurrent();
            });
        },
        highlightCurrent: function() {
            var view = this.view;
            for (var i = 0; i < view.length; i++) {
                if (
                    Math.abs(view[i].offsetTop - window.scrollY) <
                        Math.abs(
                            view[this.minIndex].offsetTop - window.scrollY
                        ) &&
                    Math.abs(view[i].offsetTop - window.scrollY) < 400
                ) {
                    this.minIndex = i;
                }
            }
            for (var i = 0; i <= this.minIndex; i++) {
                view[i].classList.remove("offset");
            }
            let id = view[this.minIndex].id;
            let li = document.querySelector('a[href="#' + id + '"]').parentNode;
            let broAndSlef = li.parentNode.children;
            for (let i = 0; i < broAndSlef.length; i++) {
                broAndSlef[i].classList.remove("highlight");
            }
            li.classList.add("highlight");
        }
    };
    controller.init(view);
}.call();
