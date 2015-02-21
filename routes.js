if (Meteor.isClient) {
    // Set initial lazy load limit for subscription
    Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    onAfterAction: function () {
        var data = Posts.findOne({slug: this.params.slug});

        if (_.isObject(data)  && !_.isArray(data)) {
            document.title = "My Meteor Blog - " + data.title;
        } else {
            document.title = "My Meteor Blog - " + this.route.getName();
        }
    }
});

Router.map(function () {
    this.route('Home', {
        path: '/',
        template: 'home',
        subscriptions: function () {
            return Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
        }
    });

    this.route('About', {
        path: '/about',
        template: 'about'
    });

    this.route('Post', {
        path: '/posts/:slug',
        template: 'post',
        waitOn: function () {
            return Meteor.subscribe('single-post', this.params.slug);
        },
        data: function (slug) {
            return Posts.findOne({slug: this.params.slug});
        }
    });
});