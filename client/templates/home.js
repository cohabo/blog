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
        return [
            {
                title: "My second entry",
                description: "This is the descriptive text.",
                author: "Author Name",
                timeCreated: moment().subtract(3, 'days').unix()
            },
             {
                title: "My first entry",
                description: "This is the first entry's descriptive text.",
                author: "Author Name",
                timeCreated: moment().subtract(4, 'days').unix()
            }
        ]
    }
});
