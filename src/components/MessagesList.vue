<template>
  <div>
    <h3>Chat</h3>
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
