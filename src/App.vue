<template>
  <Navbar :pages="pages" :ActivePage="activePage"></Navbar>

  <router-view></router-view>

  <!--
      <page-viewer 
        v-if="pages.length > 0 "
        :page="pages[activePage]"> 
     </page-viewer>

    <create-page :page-created="pageCreated" ></create-page>
  -->

</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: []
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      console.log(pageObj);
      this.pages.push(pageObj);
    },
  },
};
</script>
