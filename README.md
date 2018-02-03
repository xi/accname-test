# accname-test

This is a collection of test cases for the [Accessible Name and Description
Computation](https://www.w3.org/TR/accname-aam-1.1/). It is just a bunch of
HTML files. Feel free to use these in your tests.

You can also use [babelacc](https://xi.github.io/babelacc/) to find new test
cases.

The test files are HTML snippets. They contain the code that should be tested as well as one or more *test cases*. A test case is a `<div>` element with the following attributes:

-   `class`: must be `accname-test` (required)
-   `data-test`: the id of the element that should be tested (required)
-   `data-name`: the expected accessible name (optional)
-   `data-description`: the expected accessible description (optional)
-   `data-comment`: can be used to express the intention of this test
