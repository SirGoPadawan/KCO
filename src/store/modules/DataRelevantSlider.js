export default {
  action: {},
  mutations: {},
  state: {
    sliders: [
      {
        id: 1,
        img: "../static/gerb.png",
        relevantText1: "Минздрав России",
        relevantText2: "Медицинская помощь больным с онкологическими заболеваниями",
        relevantLinkText: "Плакат-памятка",
      },
      {
        id: 2,
        img: "../static/ACS.png",
        relevantText1: "Пройти бесплатно",
        relevantText2: " Анамнестический онкологический скриннинг",
        relevantLinkText: "Плакат-памятка",
      },
      {
        id: 3,
        img: "../static/book.png",
        relevantText1: "Ознакомиться",
        relevantText2: "На основании ФЗ «Об основах охраны здоровья граждан РФ»",
        relevantLinkText: "Плакат-памятка",
      },
      {
        id: 4,
        img: "../static/gerb.png",
        relevantText1: "Минздрав России",
        relevantText2: "Медицинская помощь больным с онкологическими заболеваниями",
        relevantLinkText: "Плакат-памятка",
      },
      {
        id: 5,
        img: "../static/ACS.png",
        relevantText1: "Пройти бесплатно",
        relevantText2: " Анамнестический онкологический скриннинг",
        relevantLinkText: "Плакат-памятка",
      },
      {
        id: 6,
        img: "../static/book.png",
        relevantText1: "Ознакомиться",
        relevantText2: "На основании ФЗ'<q>'Об основах охраны здоровья граждан РФ'</q>'",
        relevantLinkText: "Плакат-памятка",
      },
    ],
  },
  getters: {
    allDataSlider(state) {
      return state.sliders;
    },
  },
};
