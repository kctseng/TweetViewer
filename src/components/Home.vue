<template>
  <div id="app">
    <v-content>
      <v-container grid-list-md fluid>
      <v-layout column>
        <v-layout justify-start row>
        <div v-for="word in history" :key="word">
          <v-btn v-on:click="newSearchBar(word)" round color="secondary">{{word}}</v-btn>
        </div>
        </v-layout>
        <v-flex v-for="item in tweetSearchList" :key="`window${item.id}`" xs6 style="margin-top:30px">
          <v-card color="secondary">
            <tweetSearch :defaultSearchQuery="item.searchString" v-on:remove="removeThis(item)" v-on:searched="addHistory($event)"></tweetSearch>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn block v-on:click="addARow()" style="margin-top:20px" color="primary"><v-icon>fas fa-plus</v-icon></v-btn>
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
      tweetSearchList : [{id:1, searchString:""}, {id:2, searchString:""}],
      nextWindowId : 3,
      history : []
    }
  },
  components : {
    'tweetSearch' : TweetSearch
  },
  methods: {
    addARow : function(id) {
      self = this;
      self.tweetSearchList.push({id: self.nextWindowId, searchString:""});
      self.nextWindowId++;
    },
    removeThis : function(item) {
      self = this;
      self.tweetSearchList.splice(self.tweetSearchList.indexOf(item), 1);
    },
    addHistory : function(w) {
      self = this;
      if (!self.history.includes(w)) {
        self.history.push(w);
      }
    },
    newSearchBar : function(w) {
      self = this;
      self.tweetSearchList.push({id: self.nextWindowId, searchString:w});
      self.nextWindowId++;
    }
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
