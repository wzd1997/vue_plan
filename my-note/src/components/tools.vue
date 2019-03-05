<template>
    <div class="tools">
        <i class="glyphicon glyphicon-plus" @click="addNote"></i>
        <i class="glyphicon glyphicon-star" @click="toggleNote" 
        :class="{islove: activeNote && activeNote.isLove}"></i>
        <i class="glyphicon glyphicon-remove" @click="removeNote"></i>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['noteList','activeNote'])
    },
    methods: {
        ...mapMutations({
            addNote:'addNote',
            removeNote:'removeNote',
            toggleNote:'toggleNote'
        })
    }
    
}
</script>
<style>
    .islove {
        color: red!important;
    }
    .tools{
        width: 80px;
        height: 100%;
        float: left;
        padding: 20px;
        background: rgb(32, 55, 99);
        /* background: rgb(2, 90, 255); */
        text-align: center;
    }
    .tools>i {
        font-size: 30px;
        margin: 10px 0;
        color: white;
    }
</style>
