<template>
  <div id="search">
    <v-content>
        <v-toolbar color="secondary">
        <v-text-field
                hide-details
                single-line
                label="Search"
                clearable
                v-model="searchString"
                v-on:keyup.enter="startSearch()"
            ></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>  
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                flat
              >
                {{selectedOption.text}}
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="option in searchOptions"
                :key="option.text"
                @click="changeSearchOption(option)"
              >
              <v-list-tile-title>{{ option.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn small v-on:click="startSearch()" fab>
            <v-icon>fas fa-search</v-icon>
        </v-btn>
        <v-btn small v-on:click="remove()" fab>
            <v-icon>fas fa-times</v-icon>
        </v-btn>
        </v-toolbar-items>
        </v-toolbar>
        <pull-to @infinite-scroll="refreshSearch()" v-if="tweetList.length"> 
        <v-list  style="max-height:300px"  class="scroll-y">
          <v-layout column>
          <v-flex v-for="tweet in tweetList" :key="`tweet${tweet.id}`">
            <tweet :information="tweet"></tweet>
            <v-divider></v-divider>
          </v-flex>
          </v-layout>
        </v-list>
        </pull-to>
    </v-content>
  </div>
</template>

<script>
import PullTo from 'vue-pull-to'
import Tweet from './Tweet'

export default {
  name: "TweetSearch",
  props: ['defaultSearchQuery'],
  data() {
    return {
        searchURL : "Search URL",
        tweetList : [],
        searchString : "",
        methodCalled : false,
        searchOptions : [ {text: "Recent", urlOption: "recent" } , {text: "Popular", urlOption:"popular" } ],
        selectedOption : {text: "Recent", urlOption: "recent" },
        currentSearchCount :20
    }
  },
  components: {
      'pullTo' : PullTo,
      'tweet' : Tweet
  },
  created: function(){
    var self = this;
    if (self.defaultSearchQuery.length) {
      self.searchString = self.defaultSearchQuery;
      self.startSearch();
    }
  },
  methods : {
    startSearch : function() {
      var result = [];
      var Twitter = require('twitter');
      var self = this;
      var client = new Twitter({
          consumer_key : process.env.CONSUMER_KEY,
          consumer_secret : process.env.CONSUMER_SECRET_KEY,
          bearer_token: process.env.BEARER_TOKEN,
      });
      client.get('search/tweets', {q:self.searchString, count:self.currentSearchCount, result_type:self.selectedOption.urlOption}, function(error, tweets, response) {
          if (!error) {
              console.log(tweets);
              self.tweetList = tweets.statuses; 
              self.$emit('searched', self.searchString);
          }
          else {
              self.tweetList = [];
              console.log(error);
          }
      });
    },
    remove : function() {
      this.$emit('remove');
    },
    changeSearchOption : function(option) {
      this.selectedOption = option
    },
    refreshSearch() {
      //this.currentSearchCount += 20;
      //this.startSearch();
      this.tweetList = this.tweetList.concat(this.tweetList);
      console.log("refreshSearch()");
      loaded('done');
    }

  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-text-field {
    width : 100%
}
</style>
