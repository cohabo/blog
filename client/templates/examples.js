Template.contextExample.rendered = function () {
    //console.log("Rendered context example.", this.data);
}

Template.contextExample.helpers({
    'logContext': function () {
       // console.log("Log context", this);
        //console.log(Template.instance());
        return Session.get('randomNumber');
    }
});

Template.contextExample.events({
    'click button': function () {
        Session.set('randomNumber', Math.random(0,100) * 100);
    }
});
