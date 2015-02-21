Template.home.created = function() {
    console.log("Home created");
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
