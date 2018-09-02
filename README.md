# GitHub Search

Using the [Github search API](https://developer.github.com/v3/search/), implement a autocomplete search box using React.

## How to get it up and running
* View the built app on [GitHub pages](https://105ron.github.io/github-repo-search/)
* In the terminal `git clone https://github.com/105ron/github-repo-search.git`
* Change into the directory `cd github-repo-search`
* Install dependencies with `npm install`
* Optionally run the test suite with `npm test`
* Start server with `npm start`
* Visit `http://localhost:3000` to view app in development mode.

## Limitations
The solution uses GitHub's V3 REST API. There is a maximum of 10 requests every minute on the Search API. Requests during the autocomplete are throttled but it is possible to overload GitHub's API and cause a 403 error. Requests can be increased to 30/min by adding credentials to the request however during normal use you should not encounter issues.
