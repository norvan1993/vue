<template>
  <div id="filesContainer" class="d-block filesContainer">
    <file-block
      v-for="(file,index) in files"
      :file="file"
      :index="index"
      @remove="removeFile(index)"
    ></file-block>
  </div>
</template>

<script>
import FileBlock from "@/components/FileBlock.vue";
export default {
  data: function() {
    return {
      counter: 1
    };
  },
  props: {
    files: {
      type: Array,
      required: true
    }
  },
  components: {
    "file-block": FileBlock
  },
  methods: {
    removeFile(index) {
      this.files.splice(index, 1);
      this.$emit("remove", this.files);
      console.log("inside file containers: " + this.files.length);
    }
  }
};
</script>

<style scoped>
.filesContainer {
  width: 100%;
  height: 150px;
  background-color: white;
  padding-top: 0px;
  padding-left: 10px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.filesContainer:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 10px;
}
</style>
