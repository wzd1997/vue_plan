<template>
    <div class="wrapper">
      <tools/>
      <note-list></note-list>
      <editor/>
      <expansion/>
    </div>
</template>

<script>
import tools from "./components/tools";
import noteList from "./components/noteList";
import editor from "./components/editor";
import expansion from "./components/expansion";



export default {
  components: {
    tools,
    noteList,
    editor,
    expansion
  }
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
.wrapper {
  height: 100%;
  display: flex;
}
</style>
