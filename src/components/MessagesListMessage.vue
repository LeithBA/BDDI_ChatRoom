<template>
  <li :style="{ background: color }">
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
    },
    color () {
      return store.colors[this.message.user.username]
    }
  },

  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  min-width: 50px;
  max-width: 90%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
