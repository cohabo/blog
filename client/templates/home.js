Template.home.created = function() {
    console.log("Home created");

    this.autorun(function () {
        console.log(Session.get('mySessionExample'));
        console.log(this);
        console.log(Template.instance());
    });
}
Template.home.rendered= function() {
    console.log("Home rendered");
}
Template.home.destroyed= function() {
    console.log("Home destroyed");
}

Template.home.helpers({
    'postsList': function () {
        return Posts.find({}, { sort: { timeCreated: 'desc' }});
    },
    'sessionExample': function () {
        return Session.get('mySessionExample');
    }
});

Template.home.events({
    'click button.lazyload': function (event, template) {
        // Get the lazyload limit from session
        var currentLimit = Session.get('lazyloadLimit');

        // Add 2 to the lazy load limit
        Session.set('lazyloadLimit', currentLimit + 2);
    }
});
