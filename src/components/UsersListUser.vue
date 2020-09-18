<template>
  <div>
    <li id="userContainer" :style="{ background: color }">{{user.username}}</li>
  </div>
</template>

<script>
import store from '../store'
export default {
  computed: {
    color () {
      return store.colors[this.user.username]
    }
  },
  props: {
    user: { type: Object, required: true }
  }
}
</script>

<style scoped>
#userContainer {
  background: black;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
