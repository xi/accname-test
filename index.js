var fs = require('fs');

var files = [
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/focusable role=link.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-describedby + hidden.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-describedby.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-labelledby.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with label element.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/mozilla.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/pseudo-element.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/spec/example1.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/spec/example2.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/spec/example3.html', 'utf8'),
    fs.readFileSync(__dirname + '/tests/spec/step2Fiii-ednote.html', 'utf8'),
];

var getTests = function(root) {
    var elements = root.querySelectorAll('accname-test');
    return Array.prototype.map.call(elements, function(element) {
        var test = element.getAttribute('data-test');
        return {
            element: root.getElementById(test),
            name: element.getAttribute('data-name'),
            description: element.getAttribute('data-description'),
            comment: element.getAttribute('data-comment'),
        };
    });
};

module.exports = {
    files: files,
    getTests: getTests,
};
