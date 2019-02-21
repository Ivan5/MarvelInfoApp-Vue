<template>
  <div>
    <div class="flex-container">
      <div class="flex" v-for="char in character">
        <h3>{{ char.name }}</h3>
        <p>{{ char.description }}</p>
      </div>
      <div class="flex2">
        <img :src="url" alt class="char-img">
      </div>
    </div>
    <router-link to="/">
      <button type="button" class="btn-back">Back</button>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Character",
  data() {
    return {
      url: "",
      size: "standard_large.jpg"
    };
  },
  computed: {
    ...mapState({
      character: state => state.character,
      preUrl: state => state.url
    })
  },
  mounted() {
    this.$store.dispatch("getCharacter", this.$route.params.id);
    this.getImage();
  },
  methods: {
    getImage() {
      this.url = `${this.preUrl}${this.size}`;
    }
  }
};
</script>

<style>
.flex-container {
  margin: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex {
  flex: 50%;
  text-align: right;
}

.flex2 {
  flex: 50%;
}

.char-img {
  width: 50%;
  border-radius: 10px;
}

.btn-back {
  width: 200px;
  padding: 15px;
  border-radius: 25px;
  background-color: transparent;
  font-size: 20px;
  margin-bottom: 100px;
  cursor: pointer;
}
</style>
