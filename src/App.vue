<template>
<v-app>
  <div id="app">
    <toolbar></toolbar>
    <v-content>
      <v-container relative>
        <router-view></router-view>
      </v-container>
    </v-content>
    <tweetViewerFooter></tweetViewerFooter>
  </div>
</v-app>
</template>

<script>
import Toolbar from "./components/Shared/Toolbar"
import TweetViewerFooter from "./components/Shared/Footer"

export default {
  name: 'App',
  components : {
    'toolbar' : Toolbar,
    'tweetViewerFooter' : TweetViewerFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #C4FFF9;
}
</style>
