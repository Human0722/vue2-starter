<template>
  <div class="container">
    <h3>HomePage</h3>
    <h4>vue2-ready-to-code</h4>
    <img src="https://avatars.githubusercontent.com/u/56247729" alt="">
    <textarea v-model="text"></textarea>
    <button v-on:click="requestHello">send</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    requestHello() {
      this.$http.get('/student').then(response => {
        console.log(response.data)
      });
    }
  }
}
</script>

<style scoped>

</style>
