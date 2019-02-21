<template>
  <div>
    <h3>Hello this is Character vue</h3>
    <ul>
      <li v-for="character in characters" :key="character">{{ character.name}}</li>
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
