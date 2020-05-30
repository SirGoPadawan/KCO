<template>
  <article>
    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      :class="['item_background-' + (index + 1)]"
      class="main-content__collumn-item"
    >
      <p class="main-content__text item-text_semibold">
        {{ block.text }}
      </p>
    </div>
    <div class="main-content__collumn-item item-border black">
      <p class="main-content__questions">
        По вопросам льготных лекарств звоните с 14:00 до 16:00 по тел.:
      </p>
      <p class="main-content__phone">8 999 999 99 99</p>
      <p class="main-content__all-phones green">Все телефоны</p>
    </div>
  </article>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ blocks: (state) => state.dataRightBoxMain.blocks }),
  },
};
</script>
