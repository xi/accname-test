// https://www.w3.org/wiki/AccName_1.1_Testable_Statements
// execute this in a browser

(function() {
    var headings = document.querySelectorAll('h3');
    var cases = Array.prototype.map.call(headings, function(heading, i) {
        var ret = {
            comment: heading.textContent,
            index: i,
        };
        var pre = heading;
        while (pre && pre.nodeName.toLowerCase() !== 'pre') {
            pre = pre.nextSibling;
        }
        if (!pre) {
            return {};
        }
        var lines = pre.textContent.trim().split('\n');

        var fixIdrefs = function(s) {
            return s.split(/\s+/).map(function(idref) {
                return idref + '__' + i
            }).join(' ');
        };

        ret.html = lines.slice(1, -1).join('\n')
            .replace(/(id="[^"]*)"/g, '$1__' + i + '"')
            .replace(/(for="[^"]*)"/g, '$1__' + i + '"')
            .replace(/labelledby="([^"]*)"/g, function(match, contents) {
                return 'labelledby="' + fixIdrefs(contents) + '"'
            })
            .replace(/describedby="([^"]*)"/g, function(match, contents) {
                return 'describedby="' + fixIdrefs(contents) + '"'
            })
            .replace(/owns="([^"]*)"/g, function(match, contents) {
                return 'owns="' + fixIdrefs(contents) + '"'
            })
            .replace(/([^ ]*:(before|after) {)/g, '#wrapper__' + i + ' $1');

        var last = lines[lines.length - 1];
        var match = last.match(/then the accessible (name|description) of the element with id of "test" is "(.*)"/);
        if (match) {
            ret.key = match[1];
            ret.expected = match[2];
        }

        return ret;
    });

    var lines = cases.map(function(c) {
        var s = '';
        if (c.key) {
            s += '<div id="wrapper__' + c.index + '">\n' + c.html + '\n</div>\n';
            s += '<div class="accname-test" data-test="test__' + c.index + '" data-' + c.key + '="' + c.expected + '" data-comment="' + c.comment + '"></div>\n\n'
        }
        return s;
    });

    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(lines.join('')));
    a.setAttribute('download', 'w3c.html');
    a.click();
})();
