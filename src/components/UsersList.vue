<template>
  <div>
    <h3>Users</h3>
    <ul>
      <UsersListUser v-for="(user, i) in users" :key="i" :user="user" />
    </ul>
  </div>
</template>

<script>
import UsersListUser from './UsersListUser.vue'
export default {
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser
  }
}
</script>
