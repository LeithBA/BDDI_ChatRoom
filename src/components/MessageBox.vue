<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="message" type="text" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      // console.log(this.message);
      this.$emit('sendMessage', this.message)
      this.message = ''
    }
  }
}
</script>
