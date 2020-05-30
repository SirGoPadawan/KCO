<template>
  <nav>
    <header class="nav-info__btn-list">
      <button
        @click="idButton = button.id"
        :class="button.id == idButton ? 'active' : ''"
        class="nav-info__btn"
        v-for="button in buttons"
        :key="button.id"
      >
        {{ button.name }}
      </button>
    </header>
    <div class="nav-info__list-items">
      <ul class="nav-info__list item-text_semibold active">
        <li v-for="list in getNavById(idButton).lists" :key="list.id">
          <router-link to="#" class="black nav-info__link-ico"
            ><img :src="list.img" class="ico-margin" />{{ list.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({ buttons: (state) => state.dataNavInfo.buttons }),
    ...mapGetters(["getNavById"]),
  },
  data() {
    return { idButton: 1 };
  },
};
</script>
<style>
.nav-info__link-ico {
  display: flex;
  align-items: center;
}
.ico-margin {
  margin-right: 10px;
}
</style>
