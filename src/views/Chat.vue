<template>
  <div>
    <UsersList :users="users" />
    <MessagesList :messages="messages" />
    <MessageBox @sendMessage="onSendMessage" />
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue'
import MessagesList from '../components/MessagesList.vue'
import MessageBox from '../components/MessageBox.vue'

export default {
  data () {
    return {
      users: [{ name: 'Pierre' }, { name: 'Paul' }, { name: 'Jack' }],

      messages: [
        { user: { name: 'Pierre' }, text: 'Salut' },
        { user: { name: 'Paul' }, text: 'yo' }
      ]
    }
  },

  methods: {
    onSendMessage (text) {
      console.log(text)
      this.messages.push({
        user: { name: 'Leith' },
        text
      })
    }
  },
  components: {
    UsersList,
    MessagesList,
    MessageBox
  }
}
</script>
