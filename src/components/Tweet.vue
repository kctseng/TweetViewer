<template>
  <div id="tweet">
    <v-card>
        <v-card-text class="text-lg-left" wrap>
            <span><h3>{{information.user.name}}</h3></span><span class="grey--text">@{{information.user.screen_name}}</span><br>
            <span class="grey--text">{{information.created_at}}</span><br>
            <div>{{information.text}}</div>
        </v-card-text>
    </v-card>
  </div>
</template>


<script>

export default {
  name: "Home",
  props: ['information']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
