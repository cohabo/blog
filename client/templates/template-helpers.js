Template.registerHelper('formatTime', function (time, type) {
    switch (type) {
        case 'fromNow':
            return moment.unix(time).fromNow();
        case 'iso':
            return moment.unix(time).toISOSting();
        default:
            return moment.unix(time).format('LLLL');
    }
});
