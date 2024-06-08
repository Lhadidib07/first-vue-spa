<template>
  <div class="container mx-auto">
    <h2>Edit de {{ page.pageTitle }}</h2>
    <form @submit.prevent="updatePage">
      <div class="mb-3">
        <label for="pageTitle" class="form-label">Page Title</label>
        <input
          type="text"
          class="form-control"
          id="pageTitle"
          v-model="page.pageTitle" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea
          class="form-control"
          id="content"
          rows="5"
          v-model="page.content"></textarea>
      </div>
      <div class="mb-3">
        <label for="linkText" class="form-label">Link Text</label>
        <input
          type="text"
          class="form-control"
          id="linkText"
          v-model="page.linkText" />
      </div>
      <div class="mb-3">
        <label for="linkUrl" class="form-label">Link URL</label>
        <input
          type="text"
          class="form-control"
          id="linkUrl"
          v-model="page.linkUrl" />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="published"
          v-model="page.published" />
        <label class="form-check-label" for="published">Published</label>
      </div>
      <div class="align-right">
        <button type="submit" class="btn btn-success mx-3" @click.prevent="submit">
          Update Page
        </button>
        <button type="submit" class="btn btn-danger">cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps(["index"]);
const $pages = inject("$pages");

// Utilisation de ref pour réagir aux changements de la propriété index.
const page = ref($pages.getSinglePage(props.index));

function submit() {
  $pages.editPage(props.index, page.value); // Assurez-vous que $pages a une méthode editPage.
  alert("La mise à jour a été effectuée");
}
</script>

<style scoped>
.align-right {
  text-align: right;
}
</style>