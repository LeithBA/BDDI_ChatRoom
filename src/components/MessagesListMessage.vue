<template>
    <div>
        <li>
            {{message.user.name}}: {{message.text}}
        </li>
    </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      reauired: true
    }
  }
}
</script>
