var fs = require('fs');

var files = [
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/focusable role=link.html'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-describedby + hidden.html'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-describedby.html'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with aria-labelledby.html'),
    fs.readFileSync(__dirname + '/tests/accdc/w3c-alternative-text-computation/form field with label element.html'),
    fs.readFileSync(__dirname + '/tests/mozilla.html'),
    fs.readFileSync(__dirname + '/tests/pseudo-element.html'),
    fs.readFileSync(__dirname + '/tests/spec/example1.html'),
    fs.readFileSync(__dirname + '/tests/spec/example2.html'),
    fs.readFileSync(__dirname + '/tests/spec/example3.html'),
    fs.readFileSync(__dirname + '/tests/spec/step2Fiii-ednote.html'),
];
