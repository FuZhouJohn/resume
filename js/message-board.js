!function() {
    var view = document.querySelector(".message");
    var modal = {
        init: function() {
            var APP_ID = "C8qpfK10NW12Hk8C8qAVEKwq-gzGzoHsz";
            var APP_KEY = "sNufmvveHz1NyvXcOEiz4E7Q";

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function() {
            var query = new AV.Query("Message");
            return query.find(); //Promise 对象
        },
        save: function(name, content) {
            var Message = AV.Object.extend("Message");
            var message = new Message();
            return message.save({
                name: name,
                content: content
            }); //Promise 对象
        }
    };
    var controller = {
        view: null,
        modal: null,
        messageList: null,
        form: null,
        init: function(view, modal) {
            this.view = view;
            this.modal = modal;
            this.messageList = view.querySelector("#messageList");
            this.form = view.querySelector("#postMessageForm");
            this.modal.init();
            this.loadMessage();
            this.bindEvent();
        },
        loadMessage: function() {
            this.modal.fetch().then(messages => {
                messages.forEach(message => {
                    this.appendMessageNode(message);
                });
            });
        },
        bindEvent: function() {
            var postMessageForm = this.form;
            postMessageForm.addEventListener("submit", e => {
                e.preventDefault();
                this.postMessage();
            });
        },

        postMessage: function() {
            var postMessageForm = this.form;
            var content = postMessageForm.querySelector("input[name=content]")
                .value;

            var name = postMessageForm.querySelector("input[name=name]").value;
            this.modal.save(name, content).then(object => {
                this.appendMessageNode(object);
                postMessageForm.querySelector("input[name=content]").value = "";
            });
        },
        appendMessageNode: function(object) {
            var li = document.createElement("li");
            var content = document.createElement("p");
            content.className = "content";
            var nameAndTime = document.createElement("p");
            nameAndTime.className = "nameAndTime";
            content.innerText = object.attributes.content;
            nameAndTime.innerHTML = `${object.updatedAt.toLocaleDateString()} by <b>${
                object.attributes.name
            }</b>`;
            li.appendChild(content);
            li.appendChild(nameAndTime);
            this.messageList.appendChild(li);
        }
    };
    controller.init(view, modal);
}.call();
