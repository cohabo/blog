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
