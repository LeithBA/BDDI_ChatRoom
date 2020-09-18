import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')
const COLORS = ['#ffbdbd', '#ffe5bd', '#ffe5bd', '#e7ffbd',
  '#ccffbd', '#bdffd6', '#bdffec', '#bdf2ff',
  '#bdd0ff', '#c1bdff', '#e3bdff', '#fdbdff',
  '#ffbde8', '#ffbdd2']

const store = new Vue({
  data: {
    isRegistered: false,
    // error: null,
    user: {},
    users: [],
    messages: [],
    colors: {}
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

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username)
        }
      })

      socket.on('disconnect', () => {
        this.isRegsitered = false
        this.user = {}
      })

      socket.on('users update', ({ users, user, type }) => {
        if (this.users.length > 0) {
          // Test user
          if (type === 'join') {
            this.colors[user.username] = this.generateRandomColor()
          } else {
            delete this.colors[user.username]
          }
        } else {
          users.forEach((user) => {
            this.colors[user.username] = this.generateRandomColor()
          })
        }
        console.log(this.colors)
        this.users = users
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.error = null
        this.user = user
        sessionStorage.setItem('user', JSON.stringify(user))
      })

      socket.on('messages update', ({ messages }) => {
        // this.messages = messages
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })

      socket.on('chat error', (error) => {
        console.log(error)
      })
    },

    generateRandomColor () {
      return COLORS[Math.floor(Math.random() * COLORS.length)]
    },

    logout () {
      sessionStorage.clear()
      this.isRegistered = false
      router.push('/login')
    },

    // API CALLS
    userRegister (username, color) {
      socket.emit('user register', { username, color })
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
