<template>
  <nav class="nav-info">
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
        <li v-for="list in getNavById.lists" :key="list.id">
          <router-link to="#" class="black nav-info__link-ico"
            ><img :src="list.img" class="ico-margin" />{{ list.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          id: 1,
          name: "Организация",
          lists: [
            {
              id: "1",
              name: "О центре",
              img: "../static/shapenav1.png",
            },
            {
              id: "2",
              name: "Исследования",
              img: "../static/shapenav2.png",
            },
            {
              id: "3",
              name: "Оргструктура",
              img: "../static/shapenav3.png",
            },
            {
              id: "4",
              name: "Лекции и доклады",
              img: "../static/shapenav4.png",
            },
            {
              id: "5",
              name: "Контакты",
              img: "../static/shapenav5.png",
            },
            {
              id: "6",
              name: "Видеоархив",
              img: "../static/shapenav6.png",
            },
          ],
        },
        {
          id: 2,
          name: "Пациентам",
          lists: [
            {
              id: "1",
              name: "О центреитимит",
              img: "../static/shapenav1.png",
            },
            {
              id: "2",
              name: "Исследоввыыаания",
              img: "../static/shapenav2.png",
            },
            {
              id: "3",
              name: "АвыаУЕ",
              img: "../static/shapenav3.png",
            },
            {
              id: "4",
              name: "ываыввыаывавыа",
              img: "../static/shapenav4.png",
            },
            {
              id: "5",
              name: "ываыыыыыв",
              img: "../static/shapenav5.png",
            },
            {
              id: "6",
              name: "фвыаыыыфвыпфвы",
              img: "../static/shapenav6.png",
            },
          ],
        },
        {
          id: 3,
          name: "Информация",
          lists: [
            {
              id: "1",
              name: "О центреитимит",
              img: "../static/shapenav1.png",
            },
            {
              id: "2",
              name: "Исследоввыыаания",
              img: "../static/shapenav2.png",
            },
            {
              id: "3",
              name: "АвыаУЕ",
              img: "../static/shapenav3.png",
            },
            {
              id: "4",
              name: "ываыввыаывавыа",
              img: "../static/shapenav4.png",
            },
            {
              id: "5",
              name: "ываыыыыыв",
              img: "../static/shapenav5.png",
            },
            {
              id: "6",
              name: "фвыаыыыфвыпфвы",
              img: "../static/shapenav6.png",
            },
          ],
        },
      ],
      idButton: 1,
    };
  },
  computed: {
    getNavById() {
      return this.buttons.find((object) => object.id === this.idButton);
    },
  },
  methods: {},
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
