<template>
  <ul>
    <MessagesListMessage v-for="(message, i) in messages" :key="i" :message="message" />
  </ul>
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
