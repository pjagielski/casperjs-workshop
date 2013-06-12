var page = require('webpage').create();
page.onLoadFinished = function() {
    page.render('touk.png');
    phantom.exit();	
}
page.open('http://touk.pl/');
