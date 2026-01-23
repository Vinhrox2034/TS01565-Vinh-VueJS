<template>
  <div class="text-center mt-4">
    <h1>{{ greeting }}</h1>

    <button
      class="btn btn-primary mt-3"
      :title="buttonTitle"
      @click="changeGreeting"
    >
      Click here to change the greeting
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'bonjour tout le monde',
      buttonTitle: 'click here to say hello '
    }
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Salut mon amil'
      this.buttonTitle = 'new hello word has been updated'
    }
  }
}
</script>
