<template>
  <section>
    <header class="headline-top">
      <a href="#" class="headline blue">Новости</a>
      <a href="#" class="archive smoke">Архив</a>
    </header>
    <div class="news-items">
      <article v-for="(item, index) in itemNews" :key="item.id" :class="['news-item-' + (index + 1)]">
        <div class="img-box">
          <img :src="item.img" class="img-item" />
        </div>
        <time :datetime="item.dataTime" class="time smoke">{{ item.timeText }} </time>
        <router-link :to="item.linkContent" class="news-ico"></router-link>
        <p class="news-text">{{ item.title }}</p>
        <router-link :to="item.linkContent" class="btn-link">{{ item.textLink }}</router-link>
      </article>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ itemNews: (state) => state.dataNews.itemNews }),
  },
};
</script>
