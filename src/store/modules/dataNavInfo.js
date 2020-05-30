export default {
  state: {
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
          {
            id: "7",
            name: "Видеоархив",
            img: "../static/shapenav6.png",
          },
          {
            id: "8",
            name: "Видеоархив",
            img: "../static/shapenav6.png",
          },
          {
            id: "9",
            name: "Видеоархив",
            img: "../static/shapenav6.png",
          },
          {
            id: "10",
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
  },
  getters: {
    getNavById: (state) => (idButton) => {
      return state.buttons.find((object) => object.id === idButton);
    },
  },
};
