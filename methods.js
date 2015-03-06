Meteor.methods({
    insertPost: function (postDocument) {
        if (this.isSimulation) {
            Session.set('saveButton', 'Saving...');
        } else {
            var user = Meteor.user();

            // ensure the user is logged in
            if (!user ) {
                throw new Meteor.Error(401, "You need to log in to write a post.");
            }

            // Make sure post slug is unique
            // append random string to make duplicate slug unique
            if (Posts.findOne({slug: postDocument.slug})) {
                postDocument.slug = postDocument.slug + '-' + Math.random.toString(36).substring(3);
            };

            postDocument.timeCreated = moment().unix();
            postDocument.author = user.profile.name;
            postDocument.owner = user._id;

            Posts.insert(postDocument);

            // return the post slug
            // will be received as the second argument of the method callback
            return postDocument.slug;
        }
    }
});
