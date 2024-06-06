<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          :key="index"
          :index="index"
          :page="page"
          :isActive="activePage == index"
          @click.prevent="navLinkClick(index)"></navbar-link>
      </ul>
      <form action="" class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          toggel
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import navbarLink from "./navbarLink.vue";

export default {
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  components: {
    navbarLink,
  },
  created() {
    this.getThemeStting();
  },
  props: ["pages", "ActivePage", "navLinkClick"],

  data() {
    return {
      theme: "light",
    };
  },

  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeStting();
    },

    storeThemeStting() {
      localStorage.setItem("theme", this.theme);
    },

    getThemeStting() {
      let theme = localStorage.getItem("theme", this.theme);
      if (theme) {
        this.theme = theme;
      }
      this.theme = theme;
      this.storeThemeStting;
    },
  },
};
</script>
