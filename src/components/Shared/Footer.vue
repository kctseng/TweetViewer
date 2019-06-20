<template>
  <v-footer
    height="auto"
    color="black lighten-3"
    fixed
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        black
        lighten-3
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>TweetViewer</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    name : "TweetViewerFooter",
    data() {
        return {
            links : []
        };
    }
}
</script>

<style scoped>
</style>