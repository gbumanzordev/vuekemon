<template>
  <div class="lives-wrapper">
    <div class="lives">
      <div class="heart" v-if="lives >= 1"><i class="fa fa-heart"></i></div>
      <div class="heart" v-if="lives >= 2"><i class="fa fa-heart"></i></div>
      <div class="heart" v-if="lives === 3"><i class="fa fa-heart"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lives',
  props: {
    lives: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.lives-wrapper {
  display: flex;
  justify-content: center;
}
.lives {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  font-size: 32px;
  color: #ff4040;
}
</style>
