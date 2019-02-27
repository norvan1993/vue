<template>
  <div
    :style="styling(file)"
    class="mt-3 mb-3 ml-3 rounded shadow"
    @mouseenter="show=true"
    @mouseleave="show=false"
  >
    <overlay v-if="show">
      <p slot="closeIcon" style="color: white; cursor:pointer;" @click="removeBlock(index)">X</p>
    </overlay>
  </div>
</template>

<script>
import Overlay from "@/components/Overlay.vue";
export default {
  props: {
    file: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      show: false,
      image: "/../src/assets/logo.png"
    };
  },
  components: {
    overlay: Overlay
  },
  methods: {
    styling(file) {
      return {
        position: "relative",
        display: "inline-block",
        width: "100px",
        height: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgb(202, 202, 202)",
        backgroundImage: "url(" + file + ")"
      };
    },
    removeBlock(index) {
      this.$emit("remove", index);
    }
  }
};
</script>

<style scoped>
</style>
