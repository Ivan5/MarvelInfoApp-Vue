import Vue from "vue";
import Vuex from "vuex";
import { public_key, secret_key } from "./marvel";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    url: ""
  },
  mutations: {
    getCharacters(state) {
      state.characters = [];
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.map(item => {
            state.characters.push(item);
          });
        })
        .catch(err => console.log(err));
    },

    getCharacter(state, id) {
      state.character = [];
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.map(item => {
            state.character.push(item);
            state.url = `${item.thumbnail.path}/`;
          });
        })
        .catch(err => console.log(err));
    }
  },
  actions: {
    getCharacters: context => {
      context.commit("getCharacters");
    },

    getCharacter(context, id) {
      context.commit("getCharacter", id);
    }
  }
});
