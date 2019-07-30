<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>我叫{{infoList.name}}，我的性别是{{infoList.gender}}，我今年{{infoList.age}}岁了</p>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      infoList: []
    }
  },
  methods: {
    async getList(){
      let res = await this.$axios.get('/api/user');
      this.infoList = res.data;
    }
  },
  created() {
    this.getList();
  }
}
</script>
