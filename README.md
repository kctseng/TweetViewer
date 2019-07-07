# TweetViewer

1. A simple website to query multiple Twitter Strings. Built using Vue and Vuetify as practice
2. Must have own Twitter API keys to make it work. Depending on the type of the API, the search result will be different. This code is currently based on the <b>Standard</b> Twitter Developer API. This limits the number of tweets and number of characters per tweet. It also does not support pagination so there is no infinite scroll at this point.
3. Must run Chrome with no CORS while developing for it to work since it is not a server side project.

## Main Features
1. Users can add as many Tweet Search bar on the main page as desired
2. List of search history will show up on the top of the page
3. When click on the history word, if the search bar with that word is not already there, it will create one and perform the search
4. User can choose whether they want to see the popular posts or the recent posts

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

