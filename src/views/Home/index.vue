<template>
  <div class="container snap-center">
    <h3>HomePage</h3>
    <h4>vue2-ready-to-code</h4>
    <img src="https://avatars.githubusercontent.com/u/56247729" alt="" style="max-width: 200px">
    <div class="bg-gray-100 p-4">
      <h1 class="text-2xl font-bold">Welcome to my website</h1>
      <p class="mt-4">This is a paragraph decorated with tailwindcss.</p>
    </div>
    <el-button type="primary" v-on:click="requestHello">Click me!</el-button>
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
