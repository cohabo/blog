Meteor.publish('all-posts', function () {
    return Posts.find();
});

Meteor.publish('limited-posts', function () {
    return Posts.find({}, {
        limit: 2,
        sort: {timeCreated:  -1}
    });
});

Meteor.publish('specificfields-posts', function () {
    return Posts.find({}, {
        fields: {
            title: 1
        }
    });
});
