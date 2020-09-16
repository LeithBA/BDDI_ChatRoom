<template>
  <div id="wrapper">
    <UsersList :users="store.users" id="usersList" />
    <div id="chatPanel">
      <MessagesList :messages="store.messages" id="messagesList" />
      <MessageBox @sendMessage="onSendMessage" id="messagesBox" />
    </div>
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

<style lang="scss">
#wrapper {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  height: 100vh;
  width: 100vh;
}
#chatPanel {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
#usersList {
  grid-row: 1 / 3;
  height: 100vh;
  width: 15vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #202020;
}
#messagesList {
  height: 90vh;
  overflow: scroll;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #202020;
}
#messagesBox {
  height: 10vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202020;
}
</style>
