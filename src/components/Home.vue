<template>
  <div id="app">
    <v-content>
      <v-container grid-list-md fluid>
      <v-layout column>
        <v-flex v-for="item in tweetSearchList" :key="`window${item.id}`" xs6 style="margin-top:30px">
          <v-card color="secondary">
            <tweetSearch v-on:remove="removeThis(item)"></tweetSearch>
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
      tweetSearchList : [{id:1}, {id:2}],
      nextWindowId : 3
    }
  },
  components : {
    'tweetSearch' : TweetSearch
  },
  methods: {
    addARow : function(id) {
      self = this;
      self.tweetSearchList.push({id: self.nextWindowId});
      self.nextWindowId++;
    },
    removeThis : function(item) {
      self = this;
      self.tweetSearchList.splice(self.tweetSearchList.indexOf(item), 1);
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
