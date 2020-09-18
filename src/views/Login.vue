<template>
  <div>
    <div id="paper">
      <h1>The Candy Chatbox</h1>
      <div class="error" v-if="error">{{error.message}}</div>
      <form @submit.prevent="onSubmit">
        <input id="myInput" type="text" v-model="username" />
        <div id="flavour">
          <div id="flavourName">Flavour</div>
        </div>
        <button id="but">
          <h1>Shop -></h1>
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

      var input = document.getElementById('myInput')

      input.classList.add('animate')
      setTimeout(function () {
        input.classList.remove('animate')
      }, 300)
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 2.5em;
}

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
  flex-direction: column;
  margin: auto;
}

input {
  margin: auto;
  width: 100%;
  border-color: rgb(161, 167, 164);
}

#flavour {
  position: relative;
  margin: auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: white;
  text-align: center;
  top: 20px;
}

#flavourName {
  padding: 30px 0px;
}

button {
  position: relative;
  margin: auto;
  cursor: pointer;
  border-style: none;
  top: 200px;
}

@keyframes rotateInput {
  0% {
    transform: rotate(-2deg);
    background: white;
  }
  33% {
    transform: rotate(2deg);
  }
  50% {
    background: rgb(255, 198, 198);
  }
  66% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
    background: white;
  }
}

.animate {
  animation: rotateInput;
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
  box-shadow: -10px 10px 10px rgb(226, 226, 226);
}
#ball2 {
  top: 30%;
  left: 5%;
  background: rgb(226, 255, 148);
  box-shadow: -10px -2px 10px rgb(226, 226, 226);
}

#ball3 {
  top: 60%;
  left: 20%;
  background: rgb(178, 255, 229);
  box-shadow: -10px 5px 10px rgb(226, 226, 226);
}

#ball4 {
  top: 20%;
  left: 80%;
  background: rgb(172, 208, 255);
  box-shadow: 10px -4px 10px rgb(226, 226, 226);
}

#ball5 {
  top: 80%;
  left: 70%;
  background: rgb(213, 168, 255);
  box-shadow: 10px 5px 10px rgb(226, 226, 226);
}
</style>
