<template>
  <div>
    <ul>
      <MessagesListMessage v-for="(message, i) in messages" :key="i" :message="message" />
    </ul>
  </div>
</template>

<script>
import MessagesListMessage from './MessagesListMessage.vue'
export default {
  props: {
    messages: {
      type: Array
    }
  },
  components: {
    MessagesListMessage
  }
}
</script>

<style scoped>
ul {
  position: inherit;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
  padding-bottom: 0;
  padding-top: 0;
  width: 60%;
  bottom: 0;
  align-content: center;
}
</style>
