<template>
    <v-toolbar
      fixed
      color="primary"
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
        title : "Tweet Viewer"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>