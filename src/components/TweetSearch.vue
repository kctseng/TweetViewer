<template>
  <div id="search">
    <v-content>
      <v-card>
        <v-toolbar>
        <v-text-field
                hide-details
                single-line
                label="Search"
                clearable
                v-model="searchString"
            ></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn small v-on:click="startSearch()" fab>
            <v-icon>fas fa-search</v-icon>
        </v-btn>
        <v-btn small v-on:click="remove()" fab>
            <v-icon>fas fa-times</v-icon>
        </v-btn>
        </v-toolbar-items>
        </v-toolbar>

        <v-list style="max-height:300px" class="scroll-y">
          <v-layout column>
          <v-flex v-for="tweet in tweetList" :key="`tweet${tweet.id}`">
            <v-card>
                <v-card-title><h3>{{tweet.user.name}}</h3></v-card-title>
                <v-card-text class="text-lg-left">{{tweet.text}}</v-card-text>
            </v-card>
            <v-divider></v-divider>
          </v-flex>
          </v-layout>
        </v-list>
      </v-card>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TweetSearch",
  data() {
    return {
        searchURL : "Search URL",
        tweetList : [],
        searchString : "",
        methodCalled : false
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
      client.get('search/tweets', {q:self.searchString, count:20, result_type:"recent"}, function(error, tweets, response) {
          if (!error) {
              console.log(tweets);
              self.tweetList = tweets.statuses; 
          }
          else {
              self.tweetList = [];
              console.log(error);
          }
      });
    },
    remove : function() {
      this.$emit('remove');
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
