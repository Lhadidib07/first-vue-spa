<template>
  <div v-if="page" class="container" id="content">
    <h1 class="primary">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'], 
  data() {
    return {
      page: null,
    };
  },
  created() {
    this.fetchPage(this.$route.params.index); // Utiliser une méthode pour initialiser `page`
  },
  watch: {
    // Surveiller `$route.params.index` pour réagir aux changements de route
    '$route.params.index': {
      immediate: true, // Exécuter le gestionnaire immédiatement avec la valeur actuelle à la création
      handler(newIndex) {
        this.fetchPage(newIndex);
      },
    },
  },
  methods: {
    fetchPage(index) {
      // Assurez-vous que `$pages` est correctement défini et accessible
      this.page = this.$pages.getSinglePage(index);
    },
  },
}
</script>