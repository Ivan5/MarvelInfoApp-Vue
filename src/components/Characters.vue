<template>
  <div>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{name:'character', params:{ id: character.id}}">{{ character.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { public_key, secret_key } from "../marvel";
import axios from "axios";

export default {
  name: "Characters",
  data() {
    return {
      characters: []
    };
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.map(item => {
            this.characters.push(item);
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
