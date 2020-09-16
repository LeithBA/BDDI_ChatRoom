<template>
  <li>
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
