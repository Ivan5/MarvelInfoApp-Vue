<template>
  <div>
    <ul>
      <li v-for="character in characters">
        <router-link :to="{name:'character', params:{ id: character.id}}">{{ character.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Characters",
  mounted() {
    this.$store.dispatch("getCharacters");

    console.log(this.characters);
  },
  methods: {},
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  }
};
</script>

<style>
</style>
