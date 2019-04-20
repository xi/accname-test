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
    getTests: getTests,
};
