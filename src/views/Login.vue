<template>
  <div>
    <div id="paper">
      <h1>Welcome to the Candy Shop!</h1>
      <div class="error" v-if="error">{{error.message}}</div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="username" />
        <button>
          <div id="slot" />
        </button>
      </form>
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
  background: rgb(228, 228, 228);
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
}
#slot {
  margin: auto;
  background: rgb(248, 248, 248);
  height: 70%;
  width: 15%;
  border-radius: 10%;
}
</style>
