<template>
  <div>
    <div style="position:fixed; width:100%; height:55px; z-index:3;" class="bg-dark">
      <drop-down class="mt-2 float-right"></drop-down>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <div style="height:50px;"></div>
      </div>
    </div>
    <div class="row">
      <button @click="increcement">increcement</button>
      <button @click="increcementByCommit">increcement by commit</button>
      <div class="col-sm-4">{{age}}</div>
      <p>{{test.exp}}</p>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import DropDownList from "@/components/DropDownList.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    "drop-down": DropDownList
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
</style>
