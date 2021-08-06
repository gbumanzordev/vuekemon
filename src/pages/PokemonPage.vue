<template>
  <Lives :lives="lives" />
  <div class="wrapper">
    <h1 v-if="!selected">Loading Pokemon...</h1>
    <div class="pokemon-info" v-else>
      <h1>Who is this Pokemon?</h1>
      <PokemonImage :pokemon-id="selected.id" :show-pokemon="showPokemon" />
      <PokemonOptions :options="options" @selected="checkAnswer($event)" />
    </div>
  </div>
  <div class="results">
    <h3>Total Guesses: {{ guessed }}</h3>
    <h3>Total Attempts: {{ total }}</h3>
    <button @click="reset">Restart</button>
  </div>
</template>

<script>
import PokemonImage from '@/components/PokemonImage';
import PokemonOptions from '@/components/PokemonOptions';
import { getPokemonOptions } from '@/helpers/getPokemonOptions';
import Lives from '@/components/Lives';

export default {
  name: 'PokemonPage',
  components: { Lives, PokemonOptions, PokemonImage },
  data() {
    return {
      options: [],
      selected: null,
      showPokemon: false,
      guessed: 0,
      total: 0,
      lives: 3,
    };
  },
  mounted() {
    this.mixPokemonArray();
  },
  methods: {
    async mixPokemonArray() {
      this.options = await getPokemonOptions();
      this.selected = this.options.find((pokemon) => pokemon.selected);
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.total++;

      if (pokemonId === this.selected.id) {
        this.guessed++;
      } else {
        this.lives--;
      }

      if (this.lives > 0) {
        setTimeout(() => {
          this.mixPokemonArray();
          this.showPokemon = false;
          this.selected = null;
          this.options = [];
        }, 3000);
      }
    },
    reset() {
      this.mixPokemonArray();
      this.showPokemon = false;
      this.selected = null;
      this.options = [];
      this.lives = 3;
      this.guessed = 0;
      this.total = 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  min-height: 432px;
}

.results {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 + h3 {
  margin-left: 16px;
}

button {
  margin-left: 24px;
}
</style>
