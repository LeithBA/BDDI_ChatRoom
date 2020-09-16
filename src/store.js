import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const store = new Vue({
  data: {
    isRegistered: false,
    // error: null,
    user: {},
    users: [],
    messages: []
  },

  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },

  methods: {
    registerListeners () {
      socket.on('connect', () => {
        const sessionUser = sessionStorage.getItem('user')

        if (sessionUser) { store.userRegister(JSON.parse(sessionUser).username) }
      })

      socket.on('disconnect', () => {
        this.isRegsitered = false
        this.user = {}
      })

      socket.on('users update', ({ users }) => {
        this.users = users
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.error = null
        this.user = user
        sessionStorage.setItem('user', JSON.stringify(user))
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })

      socket.on('chat error', (error) => {
        console.log(error)
      })
    },

    logout () {
      sessionStorage.clear()
      this.isRegistered = false
      router.push('/login')
    },

    // API CALLS
    userRegister (username) {
      socket.emit('user register', { username })
    },
    userTyping () { },
    messageNew (message) {
      socket.emit('message new', message)
    }

  },

  created () {
    this.registerListeners()
  }

})

export default store
