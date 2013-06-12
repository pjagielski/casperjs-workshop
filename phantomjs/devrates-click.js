var page = require('webpage').create();
page.open('http://devrates.com', function () {
	page.evaluate(function() {
		var ev = document.createEvent("MouseEvents");
		ev.initEvent("click", true, true);
		document.querySelector("ul.nav li:nth-child(3) a").dispatchEvent(ev);
	})
	setTimeout(function () {
		page.render('devrates-projects.png');
        phantom.exit();
    }, 10000);
});
