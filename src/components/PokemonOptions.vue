<template>
  <div class="options-container">
    <div
      class="option"
      v-for="option in options"
      :key="option.id"
      @click="revealAnswer(option.id)"
      :class="{
        error: answerRevealed && !option.selected,
        success: answerRevealed && option.selected,
      }"
    >
      {{ option.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonOptions',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      answerRevealed: false,
    };
  },
  methods: {
    revealAnswer(id) {
      this.answerRevealed = true;
      this.$emit('selected', id);
    },
  },
};
</script>

<style scoped>
.option {
  transition: all 0.3s;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  padding: 24px;
  font-weight: bold;
  text-transform: capitalize;
}

.option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 80%;
  place-self: center;
  margin: 8px auto;
}

.success {
  border: solid 2px lawngreen;
}

.error {
  border: solid 2px #ff4040;
}
</style>
