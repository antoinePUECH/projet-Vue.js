import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        favorite: ['test'],
    },

    getters: {
        getFavorite: state => {
          return state.favorite
        }
    },

    mutations:{

    },

    actions:{

    }
})