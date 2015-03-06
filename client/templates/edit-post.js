Template.editPost.events({
    'submit form': function (event, template) {
        event.preventDefault();

        // Get form and user
        var form = event.target,
            user = Meteor.user(),
            _this = this; // Used for router redirect

        // Update the post if it already exists
        // else create a new post
        if (_this._id) {
            Posts.update(_this._id, {$set: {
                title: form.title.value,
                description: form.description.value,
                text: form.text.value
            }}, function (error){
                if (error) {
                    // display error to the user
                    alert(error.reason);
                } else {
                    // Redirect to the post
                    Router.go('Post', {slug: _this.slug} );
                }
            });
        } else {
            // Create post slug
            var slug = _.slugify(form.title.value);

            Posts.insert({
                title: form.title.value,
                slug: slug,
                description: form.description.value,
                text: form.text.value,
                timeCreated: moment().unix(),
                author: user.profile.name,
                owner: user._id
            }, function (error) {
                if (error) {
                    // display the error to the user
                    alert(error.reason);
                } else {
                    // Redirect to the post
                    Router.go('Post', {slug: slug});
                }
            });
        }
    }
});
