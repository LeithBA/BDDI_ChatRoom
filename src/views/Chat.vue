<template>
  <div id="wrapper">
    <div id="usersPanel">
      <div id="usersListBehind" />
      <UsersList :users="store.users" id="usersList" />
      <div id="platform" />
    </div>
    <div id="chatPanel">
      <MessageBox @sendMessage="onSendMessage" id="messagesBox" />

      <div id="boxGroup">
        <div id="lever">
          <button id="ball" v-on:click="onLeverPull()"></button>
          <div id="rod"></div>
        </div>
        <MessagesList :messages="store.messages" id="messagesList" />
      </div>
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
    },
    onLeverPull () {
      var lever = document.getElementById('lever')

      lever.classList.add('animate')
      setTimeout(function () {
        lever.classList.remove('animate')
      }, 1000)
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
  display: flex;
  padding: 2vh;
}

#chatPanel {
  position: absolute;
  right: 0;
  top: 5vh;
  height: 90vh;
  width: 68%;
}

#boxGroup {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

#usersPanel {
  position: absolute;
  margin: auto;
  width: 100%;
  left: 10vh;
}

#usersList {
  position: relative;
  top: 5.3vh;
  left: 0.5vh;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  height: 40vh;
  width: 19%;
  color: #202020;
  background: rgb(243, 243, 243);
  clip-path: polygon(12% 8%, 90% 4%, 100% 100%, 0% 100%);
}

#usersListBehind {
  position: absolute;
  top: 5vh;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  height: 40vh;
  width: 20%;
  background: #a7a7a7;
  clip-path: polygon(12% 8%, 90% 4%, 100% 100%, 0% 100%);
}

#platform {
  position: relative;
  width: 30%;
  height: 5vh;
  top: 5vh;
  background: rgb(255, 254, 207);
}
#messagesList {
  position: absolute;
  padding-left: 10%;
  padding-right: 15%;
  height: 80%;
  width: 70%;
  right: 10px;
  overflow-x: hidden;
  color: #202020;
  background: #ececec;
  box-shadow: 10px 5px 5px rgb(150, 150, 150);
  clip-path: polygon(10% 5%, 90% 4%, 95% 100%, 5% 100%);
}
#messagesBox {
  height: 20%;
  width: 60%;
  padding-left: 10%;
  padding-right: 10%;
  background: rgb(209, 255, 233);
  text-align: center;
  color: #202020;
  box-shadow: 10px 5px 5px rgb(248, 248, 248);
  clip-path: polygon(2% 8%, 100% 0%, 98% 100%, 0% 95%);
}

#lever {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 60vh;
  height: 25vh;
  left: -200px;
  transform: rotate(20deg);
}
#rod {
  margin: auto;
  margin-left: 0;
  width: 500px;
  height: 2%;
  background: rgb(78, 78, 78);
}

#ball {
  position: relative;
  cursor: pointer;
  margin: auto;
  margin-right: 0;
  width: 50px;
  height: 50px;
  background: rgb(78, 78, 78);
  border-radius: 50%;
  z-index: 1;
  border: 0;
}

@keyframes rotateLever {
  0% {
    transform: rotate(20deg);
  }
  35% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
}

.animate {
  animation: rotateLever;
  animation-duration: 400ms;
}
</style>
