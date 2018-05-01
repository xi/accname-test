var fs = require('fs');

var files = {
    'labels': fs.readFileSync(__dirname + '/tests/labels.html', 'utf8'),
    'mozilla': fs.readFileSync(__dirname + '/tests/mozilla.html', 'utf8'),
    'pseudo-element': fs.readFileSync(__dirname + '/tests/pseudo-element.html', 'utf8'),
    'spec example1': fs.readFileSync(__dirname + '/tests/spec/example1.html', 'utf8'),
    'spec example2': fs.readFileSync(__dirname + '/tests/spec/example2.html', 'utf8'),
    'spec example3': fs.readFileSync(__dirname + '/tests/spec/example3.html', 'utf8'),
    'spec step2Fiii-ednote': fs.readFileSync(__dirname + '/tests/spec/step2Fiii-ednote.html', 'utf8'),
    'w3c wiki': fs.readFileSync(__dirname + '/tests/w3c.html', 'utf8'),
};

var getTests = function(root) {
    var elements = root.querySelectorAll('.accname-test');
    return Array.prototype.map.call(elements, function(element) {
        var test = element.getAttribute('data-test');
        return {
            element: root.querySelector('#' + test),
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
