<template>
  <div>
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
  height: 110%;
  text-align: center;
  padding-bottom: 0;
  padding-top: 0;
}

#users {
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>
