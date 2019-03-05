<template>
  <div class="ex" v-show="flag">To be continued。。。。。。</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["flag"])
  }
};
</script>
<style scoped>
.ex {
  /* width: 100%; */
  height: 100%;
}
</style>
