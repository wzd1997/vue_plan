import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        noteList:[],
        activeNote:null,
        allNote:null,
        flag: false
    },
    mutations: {
        //添加笔记
        addNote(state) {
            state.flag = true;
            let newNote = {
                title: 'NoTitle',
                content: '',
                isLove: false,
                time: new Date().getTime() 
            };
            state.noteList.push(newNote);
            state.activeNote = newNote;
        },
        // 选中的笔记
        changeActiveNote(state,note) {
            state.activeNote = note;
        },
        // 删除笔记
        removeNote(state) {
            state.noteList = state.noteList.filter(function(v) {
                return v.time !== state.activeNote.time
            });
            state.activeNote = state.noteList[0];
        },
        // 是否收藏
        toggleNote(state) {
            state.activeNote.isLove = !state.activeNote.isLove;
        },
    },
    getters: {
        // 筛选出被收藏的
        loveList(state) {
            // return state.noteList.filter(function(v) {
                // return v.isLove === true;
            // });
            return state.noteList.filter((v) => v.isLove === true);
        }
    },

})

