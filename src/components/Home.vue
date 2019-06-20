<template>
  <div id="app">
    <v-content>
      <v-container grid-list-md fluid>
      <v-layout row>
        <v-flex v-for="i in numberOfTweetSearch" :key="`window${i}`" xs6>
          <v-card dark color="secondary">
            <tweetSearch></tweetSearch>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
    </v-content>
  </div>
</template>


<script>
import TweetSearch from "./TweetSearch"

export default {
  name: "Home",
  data() {
    return {
      numberOfTweetSearch : 2
    }
  },
  components : {
    'tweetSearch' : TweetSearch
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    margin-top : 5%;
    margin-bottom : 20%;
  }
</style>
