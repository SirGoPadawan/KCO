<template>
  <section>
    <header class="headline-top">
      <a href="#" class="headline blue">Публикации</a>
      <a href="#" class="archive smoke">Архив</a>
    </header>
    <div class="public__bottom-item">
      <article
        v-for="(list, index) in itemsPublic"
        :key="list.id"
        :class="index <= 2 ? 'public__box-1' : 'public__box-2'"
      >
        <div class="public__box-img">
          <img :src="list.img" class="img-item" />
        </div>
        <div class="public__box-bottom">
          <time :datetime="list.dataPublic" class="time smoke">{{
            list.textTime
          }}</time>
          <p class="public-text">{{ list.text }}</p>
          <router-link :to="list.linkToContent" class="btn-link">{{
            list.textLink
          }}</router-link>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ itemsPublic: (state) => state.dataPublic.itemsPublic }),
  },
};
</script>
