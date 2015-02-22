if (Meteor.isClient) {
    Meteor.subscribe("userRoles");
}

Accounts.config({
    forbidClientAccountCreation: true
});
