<template>
  <div>
    <h3>Users</h3>
    <ul>
      <UsersListUser id="users" v-for="(user, i) in users" :key="i" :user="user" />
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

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  height: 80%;
  text-align: center;
}

#users {
  width: 50px;
  height: 50px;
  background: rgb(255, 199, 199);
  border-radius: 50%;
}
</style>
