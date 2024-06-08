<template>
  <Navbar :pages="pages" :ActivePage="activePage"></Navbar>

  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";


export default {
  components: {
    Navbar,
  },
   
  methods: {
    pageCreated(pageObj) {
      //console.log(pageObj);
      this.pages.push(pageObj);
    },
  },
};
</script>
