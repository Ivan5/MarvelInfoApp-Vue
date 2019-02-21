<template>
  <div>
    <div class="card-container">
      <div class="card" v-for="character in characters">
        <h3>{{ character.name }}</h3>
        <router-link :to="{name:'character', params:{ id: character.id}}">
          <button type="button" name="button" class="btn-view">View</button>
        </router-link>
      </div>
    </div>
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
.card-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  margin-left: 300px;
  grid-gap: 10px;
}

.card {
  text-align: center;
  background-color: #333;
  min-height: 200px;
  max-width: 300px;
}

.card h3 {
  color: #fff;
}

.btn-view {
  padding: 10px;
  margin-top: 50px;
  border-radius: 15px;
  width: 120px;
  background-color: transparent;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
