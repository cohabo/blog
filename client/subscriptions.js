Session.setDefault('lazyloadLimit', 2);
Tracker.autorun(function () {
    Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});
//Meteor.subscribe('limited-posts');
