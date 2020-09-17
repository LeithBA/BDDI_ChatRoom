<template>
  <div>
    <div id="paper">
      <h1>Welcome to the Candy Shop!</h1>
      <div class="error" v-if="error">{{error.message}}</div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="username" />
        <button id="but">
          <div id="slot" />
        </button>
      </form>
    </div>
    <div>
      <div class="ball" id="ball1"></div>
      <div class="ball" id="ball2"></div>
      <div class="ball" id="ball3"></div>
      <div class="ball" id="ball4"></div>
      <div class="ball" id="ball5"></div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      username: '',
      error: store.error
    }
  },

  methods: {
    onSubmit () {
      store.userRegister(this.username)
      this.username = ''

      var but = document.getElementById('but')

      but.classList.add('animate')
      setTimeout(function () {
        but.classList.remove('animate')
      }, 300)
    }
  }
}
</script>

<style scoped>
#paper {
  margin: auto;
  margin-top: 7%;
  width: 60vh;
  height: 70vh;
  background: rgb(238, 238, 238);
  border-color: rgb(161, 167, 164);
  display: flex;
  flex-direction: column;
  clip-path: polygon(
    0 0,
    92% 0,
    100% 26%,
    93% 75%,
    100% 100%,
    11% 100%,
    0 76%,
    8% 30%
  );
}

form {
  display: flex;
  margin: auto;
}

input {
  margin: auto;
  border-color: rgb(161, 167, 164);
}

button {
  cursor: pointer;
  display: flex;
  margin: auto;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: rgb(78, 78, 78);
  border: 0;
}
#slot {
  margin: auto;
  background: rgb(248, 248, 248);
  height: 70%;
  width: 15%;
  border-radius: 10%;
}

@keyframes rotateButton {
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animate {
  animation: rotateButton;
  animation-duration: 400ms;
}

.ball {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: -1;
}

#ball1 {
  top: 80%;
  left: 30%;
  background: rgb(255, 173, 173);
}
#ball2 {
  top: 30%;
  left: 5%;
  background: rgb(226, 255, 148);
}

#ball3 {
  top: 60%;
  left: 20%;
  background: rgb(178, 255, 229);
}

#ball4 {
  top: 20%;
  left: 80%;
  background: rgb(172, 208, 255);
}

#ball5 {
  top: 80%;
  left: 70%;
  background: rgb(213, 168, 255);
}
</style>
