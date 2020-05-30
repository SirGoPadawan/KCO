<template>
  <section>
    <header class="headline-top">
      <a href="#" class="headline blue">О центре</a>
      <a href="#" class="archive smoke">Фотографии</a>
    </header>
    <article class="about-collumns">
      <div class="about-collumns__box-left">
        <p
          v-for="paragraph in paragraphs"
          :key="paragraph.id"
          class="item-text_semibold about-text"
        >
          {{ paragraph.text }}
        </p>
        <router-link :to="itemsAbout.contentToLink" class="link-about btn-link"
          >{{ itemsAbout.textLink }}
        </router-link>
      </div>
      <div class="about-collumns__box-right">
        <img :src="itemsAbout.img" class="img-item" />
      </div>
    </article>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ paragraphs: (state) => state.dataAbout.paragraphs }),
    ...mapState({ itemsAbout: (state) => state.dataAbout.itemsAbout }),
  },
};
</script>
