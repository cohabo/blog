Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
    Posts.allow({
        insert: function (userId, document) {
            // user must be logged in and document must be owned by user
            return userId && doc.owner === userId && Meteor.user().roles.admin;
        },
        update: function (userId, document, fields, modifier) {
            // user must be an admin
            return Meteor.user.roles.admin();
        },
        // make sure we only get this field from the documents
        fetch: ['owner']
    });

    Posts.deny({
        update: function (userId, docs, fields, modifier) {
            // Can't change owners, timeCreated or slug
            return _.contains(fields, 'owner') || _.contains(fields, 'timeCreated') || _.contains(fields, 'slug');
        }
    });
}
