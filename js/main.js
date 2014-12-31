var app = {

    findByName: function() {
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(self.employeeLiTpl(employees));
        });
    },

    initialize: function() {
<<<<<<< HEAD
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        var self = this;
        this.store = new MemoryStore(function(){
            self.renderHomeView();
=======
        var self = this;
        this.store = new MemoryStore(function(){
            self.showAlert('Store initialized', 'Info');
>>>>>>> 01ea357266d766f81a8b8bc333daf51dfd29c300
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
    showAlert: function(message, title){
        if (navigator.notification){
            navigator.notification.alert(message,null,title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
<<<<<<< HEAD
    },
    renderHomeView: function(){
        $('body').html(this.homeTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));

=======
>>>>>>> 01ea357266d766f81a8b8bc333daf51dfd29c300
    }

};

app.initialize();