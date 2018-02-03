import sys
import re
import html

# https://hg.mozilla.org/mozilla-central/raw-file/5d6d869ec7becc99b8c3dc639fc52e49b1af3ef1/accessible/tests/mochitest/name/test_general.html
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
