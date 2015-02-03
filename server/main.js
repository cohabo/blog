Meteor.startup(function () {
    console.log("Server started.");

    if (Posts.find().count() === 0) {
        console.log("Adding dummy posts.");
        var dummyPosts = [
            {
                title: "My first entry.",
                slug: "my-first-entry",
                description: "An entry in the blog.",
                timeCreated: moment().subtract(7, 'days').unix(),
                author: "Pat Doe"
            },
            {
                title: "My second entry.",
                slug: "my-second-entry",
                description: "Another entry in the blog.",
                timeCreated: moment().subtract(3, 'days').unix(),
                author: "Alex Doe"
            },
            {
                title: "My third entry.",
                slug: "my-third-entry",
                description: "Another 'nother entry in the blog.",
                timeCreated: moment().subtract(2, 'days').unix(),
                author: "Cody Doe"
            }
        ];

        // Add each name to database
        _.each(dummyPosts, function (post) {
            Posts.insert(post);
        });
    }
});
