<template>
  <div class="container mx-auto">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label"> Page Title </label>
        <input type="text" class="form-control" v-model="pageTitle" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label"> Content </label>
        <textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="content"></textarea>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published" />
            <label class="form-check-label" for="gridCheck1"> Published </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary"
          :disabled="isFormInvalid"
          @click.prevent="submitForm">
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    emits:{
        pageCreated({pageTitle,content , link,published}){
            if(!pageTitle || !content || !link || !published )
                return false;
            return true; 
        }
    }, 
  props: ["pageCreated"],
  computed:{
    isFormInvalid(){
        if(!this.pageTitle|| !this.content || !this.linkText || !this.linkUrl){
           return true;
        }
        return false;
    }
  },
  data() {
    return {
      pageTitle:'',
      content:'',
      linkText:'',
      linkUrl:'',
      published:true
    }
  },
  methods:{
    submitForm(){
        if(!this.pageTitle|| !this.content || !this.linkText || !this.linkUrl){
            alert("please fill the form");
            return;
        }else{
           this.pageCreated({
            pageTitle:this.pageTitle,
            content:this.content,
            link:{
                text:this.linkText,
                url: this.linkUrl
            },
            published : this.published
            });
        }
      this.pageTitle='',
      this.content='',
      this.linkText='',
      this.linkUrl='',
      this.published=true
    }
  }
};
</script>
