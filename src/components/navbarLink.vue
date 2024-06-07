<template>
  <router-Link
    :to="`/${index}`"
     class="nav-link"
     active-class="active"
     aria-current="page"
    :href="page.link.url"
    :title="`this link goes to ${page.link.text} page `">
    {{ page.link.text }}
  </router-Link>
</template>

<script>
export default {
  props: ["page", "isActive" , "index"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
      };
    },
  },
};
</script>

