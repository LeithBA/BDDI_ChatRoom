<template>
  <div>
    <!-- <UsersList :users="store.users" /> -->
    <MessagesList :messages="store.messages" />
    <MessageBox @sendMessage="onSendMessage" />
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue'
import MessagesList from '../components/MessagesList.vue'
import MessageBox from '../components/MessageBox.vue'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },

  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    }
  },
  components: {
    UsersList,
    MessagesList,
    MessageBox
  }
}
</script>
