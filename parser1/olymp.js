var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true,
    dock: true
});

var log = "hoverhall@outlook.com", pass = "allmaster911zcun";

nightmare
    .goto('https://olymptrade.com/home')
    .insert("input[type='email']", log)
    .insert("input[type='password']", pass)
    .click(".buttons button[type='submit']")
    .evaluate( () => {
        console.log("hello");
        var elements = document.getElementsByClassName("sum");
        for (var i = 0; elements.length > i; i++) {
            console.log(elements[i].value)
        }
    })