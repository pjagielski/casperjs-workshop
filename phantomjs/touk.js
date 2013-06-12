var page = require('webpage').create();
page.open('http://touk.pl/', function () {
    page.render('touk.png');
    phantom.exit();
});
