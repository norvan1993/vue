<template>
  <div style="position:relative;" class="col-sm-3 col-md-2 hidden-xs-down">
    <button
      @click="showClick()"
      style="position:relative;z-index:2;"
      class="btn btn-light btn-block animated fadeIn"
    >
      <i class="fas fa-bars mr-2"></i>
      {{content}}
    </button>
    <div
      style="position:relative; z-index:1; width:100%; height:400px; overflow:hidden;"
      class="d-block"
    >
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <ul v-if="show" class="list-group d-block">
          <transition-group name="slide" mode="out-in">
            <li class="list-group-item" style="cursor:pointer; z-index:2" key="one">home</li>

            <li class="list-group-item" style="cursor:pointer; z-index:2" key="two">photos</li>

            <li
              class="list-group-item"
              @click="first=!first"
              style="cursor:pointer; z-index:2"
              key="three"
            >
              friends
              <i class="fas fa-caret-down"></i>
            </li>
            <ul class="list-group" v-if="first" style="z-index:1; width:100%;" key="four">
              <li class="list-group-item bg-secondary" style="color:white">best friends</li>
              <li class="list-group-item bg-secondary" style="color:white">latest friends</li>
            </ul>

            <li class="list-group-item" key="five">contact us</li>
          </transition-group>
        </ul>
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      show: false,
      content: "show",
      first: false
    };
  },
  components: {},
  methods: {
    showClick() {
      this.show = !this.show;
      this.content == "show"
        ? (this.content = "hide")
        : (this.content = "show");
    }
  }
};
</script>

<style>
.slide-enter {
  /* transform: scale(1, 0); */
}
.slide-enter-active {
  /*
  transform-origin: top left;
  transition: transform 1s ease-in-out;
  */
  animation: fadeInDown 1s forwards;
}
.slide-leave {
}
.slide-leave-active {
  /*
  transition: transform 1s ease-in-out;
  transform: scale(1, 0);
  transform-origin: top left;
  */
  animation: fadeOutUp 1s forwards;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
</style>
