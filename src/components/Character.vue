<template>
  <div>
    <h3>Hello this is Character vue</h3>
    <p>{{ this.$route.params.id}}</p>

    <ul>
      <li v-for="char in character" :key="char.id">
        {{char.name}}
        {{char.description}}
      </li>
    </ul>
    <img :src="url" alt>
  </div>
</template>

<script>
import { public_key } from "../marvel";
import axios from "axios";

export default {
  name: "Character",
  data() {
    return {
      character: [],
      url: "",
      size: "standard_large.jpg"
    };
  },
  mounted() {
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      let characterID = this.$route.params.id;
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters/${characterID}?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.map(item => {
            this.character.push(item);
            this.url = `${item.thumbnail.path}/${this.size}`;
            console.log(this.url);
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
