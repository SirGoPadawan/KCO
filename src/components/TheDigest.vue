<template>
  <section>
    <header class="headline-top">
      <a href="#" class="headline blue">Онко-дайджест</a>
      <a href="#" class="archive smoke">Архив</a>
    </header>
    <div class="digest__box">
      <article v-for="item in digestItems" :key="item.id" class="digest__items">
        <div class="digest__box-img">
          <img :src="item.img" class="img-item" />
        </div>
        <time :datetime="item.dataTime" class="digest-time time smoke"> {{ item.textTime }}</time>
        <p class="digest-text item-text_semibold">{{ item.text }}</p>
        <router-link :to="item.linkToContent" class="btn-link">{{ item.textLink }}</router-link>
      </article>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ digestItems: (state) => state.dataDigest.digestItems }),
  },
};
</script>
