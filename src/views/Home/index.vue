<template>
  <div>
    <h3>HomePage</h3>
    <h4>vue2-ready-to-code</h4>
    <img src="https://avatars.githubusercontent.com/u/56247729" alt="">
    <textarea v-model="text"></textarea>
    <button v-on:click="requstHello">send</button>
  </div>
</template>

<script>
import homeRequest from '@/api/home'
export default {
  name: "HomePage",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    requestHello() {
      homeRequest.sendHi();
    }
  }
}
</script>

<style scoped>

</style>
