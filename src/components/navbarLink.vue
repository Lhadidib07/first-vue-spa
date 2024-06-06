<template>
  <li>
    <a
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :href="page.link.url"
      :title="`this link goes to ${page.link.text} page `"
      @click.prevent="$bus.$emit('navbarLinkAtivated', index)"
      >{{ page.link.text }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["page", "index", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
      };
    },
  },
};
</script>


