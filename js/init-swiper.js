!function() {
    var view = document.querySelector(".mySwiper");
    var controller = {
        view: null,
        mySwiper: null,
        init: function(view) {
            this.view = view;
            this.initSwiper();
        },
        initSwiper: function() {
            this.mySwiper = new Swiper(
                this.view.querySelector(".swiper-container"),
                {
                    loop: true,
                    pagination: {
                        el: this.view.querySelector(".swiper-pagination")
                    },
                    navigation: {
                        nextEl: this.view.querySelector(".swiper-button-next"),
                        prevEl: this.view.querySelector(".swiper-button-prev")
                    }
                }
            );
        }
    };
    controller.init(view);
}.call();
