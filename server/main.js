Meteor.startup(function () {
    console.log("Server started.");

    if (Posts.find().count() === 0) {
        console.log("Adding dummy posts.");
        var dummyPosts = [
            {
                title: "My first entry.",
                slug: "my-first-entry",
                description: "An entry in the blog.",
                timeCreated: moment().subtract(10, 'days').unix(),
                author: "Pat Doe"
            },
            {
                title: "My second entry.",
                slug: "my-second-entry",
                description: "Another entry in the blog.",
                timeCreated: moment().subtract(7, 'days').unix(),
                author: "Alex Doe"
            },
            {
                title: "My third entry.",
                slug: "my-third-entry",
                description: "Another 'nother entry in the blog.",
                timeCreated: moment().subtract(6, 'days').unix(),
                author: "Cody Doe"
            },
            {
                title: "My fourth entry.",
                slug: "my-fourth-entry",
                description: "An entry in the blog.",
                timeCreated: moment().subtract(5, 'days').unix(),
                author: "Pat Doe"
            },
            {
                title: "My fifth entry.",
                slug: "my-fifth-entry",
                description: "An entry in the blog.",
                timeCreated: moment().subtract(4, 'days').unix(),
                author: "Pat Doe"
            },
            {
                title: "My sixth entry.",
                slug: "my-sixth-entry",
                description: "An entry in the blog.",
                timeCreated: moment().subtract(3, 'days').unix(),
                author: "Pat Doe"
            },
        ];

        // Add each name to database
        _.each(dummyPosts, function (post) {
            Posts.insert(post);
        });
    }

    // Create admin user if none exists
    if (Meteor.users.find().count() === 0) {
        console.log('Created Admin user');

        var userId = Accounts.createUser({
            username: 'brylie',
            email: 'test@user.com',
            password: 'testing123',
            profile: {
                name: "Test User"
            }
        });
        Meteor.users.update(userId, {$set: {roles: {admin: true}}});
    }
});
