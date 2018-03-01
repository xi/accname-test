import sys
import re
import html

# https://dxr.mozilla.org/mozilla-central/source/accessible/tests/mochitest/name/test_general.html
with open(sys.argv[1]) as fh:
    comments = []
    for line in fh:
        line = line.strip()

        if line.startswith('//'):
            comments.append(line[3:])
        else:
            match = re.match('testName\("(.*)", "(.*)"\);', line)
            if match:
                test, name = match.groups()

                print('<div class="accname-test" data-test="{test}" data-name="{name}" data-comment="{comment}"></div>'.format(
                    test=html.escape(test, quote=True),
                    name=html.escape(name, quote=True),
                    comment=html.escape(' '.join(comments), quote=True)
                ))

            if not line:
                comments = []
