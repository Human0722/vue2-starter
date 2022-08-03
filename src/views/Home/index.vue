<template>
  <div>
    <h3>HomePage</h3>
    <h4>vue2-ready-to-code</h4>
    <img src="https://avatars.githubusercontent.com/u/56247729" alt="">
    <textarea v-model="text"></textarea>
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
  created() {
    document.title = this.$store.state.home.title;
    homeRequest("https://www.baidu.com");
  }
}
</script>

<style scoped>

</style>
