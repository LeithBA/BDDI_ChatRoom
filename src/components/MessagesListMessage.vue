<template>
  <li>
    <strong v-if="isCurrentUser">{{ message.user.username }}</strong>
    <em v-else>{{ message.user.username }}</em>
    : {{ message.text }}
  </li>
</template>

<script>
import store from '../store'
export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    }
  },

  props: {
    message: {
      type: Object,
      reauired: true
    }
  }
}
</script>

<style scoped>
li {
  margin: auto;
  width: max-content;
  min-width: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  background: rgb(219, 153, 153);
}
</style>
