<template>
  <div class="alert alert-dismissible alert-danger">
    <button
      type="button"
      class="close"
      @click="$emit('update:isShowMessages', false)"
      data-dismiss="alert"
    >
      x
    </button>
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'Error-messages',
    props: {
      message: {
        type: String,
      },
    },
  }
</script>
