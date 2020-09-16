<template>
  <div>
    <li>{{user.username}}</li>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
  },

  data() {
    return {};
  },
};
</script>
