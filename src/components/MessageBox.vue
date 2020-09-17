<template>
  <div>
    <form id="form" @submit.prevent="onSubmit">
      <input v-model="message" type="text" />
      <button id="but">
        <div id="slot" />
      </button>
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
div {
  width: 100%;
  display: flex;
  margin: auto;
}

#form {
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
}
input {
  width: 80%;
  height: 40px;
  margin: auto;
  border-color: rgb(161, 167, 164);
}
button {
  margin: auto;
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgb(78, 78, 78);
  border: 0;
}

#slot {
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
  animation-duration: 300ms;
}
</style>
