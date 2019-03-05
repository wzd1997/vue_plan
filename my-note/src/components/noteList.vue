<template>
  <div class="note-list">
    <div class="header">
      <h2>Cloud Note</h2>
      <div class="btn-group btn-group-justified" role="group" aria-label="...">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-default"
            :class="{active: flag}"
            @click="flag = true"
          >All NOTES</button>
        </div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-default"
            :class="{active: !flag}"
            @click="flag = false"
          >Favorites</button>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(note,index) in nowList"
        :key="index"
        :class="{isActive:note.time === activeNote.time}"
        @click="changeActiveNote(note)"
      >{{ note.title }}</div>
    </div>
  </div>
</template>

<script>



import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      flag: true
    };
  },
  computed: {
    ...mapState(["noteList","activeNote"]),
    ...mapGetters(["loveList"]),
    nowList() {
      return this.flag ? this.noteList : this.loveList;
    }
  },
  methods: {
    ...mapMutations(["changeActiveNote", "isLove", "allNote"])
  },
  create() {
    console.log(111)
  }
};
</script>
<style scoped>
.isActive {
  color: blue;
  font-style: italic;
  font-weight: 800;
}
.note-list {
  width: 300px;
  padding: 20px;
  background: rgb(240, 240, 243);
}
.header {
  width: 100%;
  height: 15%;
  text-align: center;
}
.list {
  width: 100%;
  height: 85%;
  overflow-y: auto;
}
.list > div {
  font-size: 18px;
  margin: 10px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

