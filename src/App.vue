/* eslint-disable prettier/prettier */
<template>
  <welcome></welcome>
</template>


<script>
import { mapState, mapActions } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Welcome from "@/components/Welcome.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    welcome: Welcome
  },
  methods: {
    ...mapActions(["increcement"]),
    increcementByCommit() {
      this.$store.dispatch("increcement");
    }
  },
  computed: {
    ...mapState(["name", "age", "test"])
  }
};
</script>

<style>
html,
body {
  font-family: "Bungee";
}
</style>
