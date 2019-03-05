<template>
  <div class="editor" v-show="flag">
    <div class="header">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="please input a title"
          v-model="nowNote.title"
        >
      </div>
    </div>
    <div class="form-group content">
      <label for="content">Content</label>
      <textarea class="form-control" rows="3" placeholder="please input content" v-model="nowNote.content"></textarea>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["noteList", "activeNote",'flag']),
    nowNote() {
      return this.activeNote ? this.activeNote : {};
    }
  }
};
</script>

<style scoped>
.editor {
  width: 600px;
  height: 100%;
  padding: 20px 50px;
}
.header {
  width: 100%;
  height: 15%;
}
.content {
  width: 100%;
  height: 85%;
}
.content textarea {
  width: 100%;
  height: 95%;
}
</style>
