<template>
  <div>
      <h3>Login</h3>
      <div class="error" v-if="error"> {{error.message}} </div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" />
      <button>login</button>
    </form>
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
