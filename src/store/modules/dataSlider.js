export default {
  action: {},
  mutations: {},
  state: {
    slidersRelevant: [
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
    slidersActual: [
      {
        id: 1,
        img: "../static/lin1.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 2,
        img: "../static/lin2.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 3,
        img: "../static/lin3.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 4,
        img: "../static/lin4.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 5,
        img: "../static/lin5.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 6,
        img: "../static/lin6.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 7,
        img: "../static/lin1.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 8,
        img: "../static/lin2.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
      {
        id: 9,
        img: "../static/lin3.png",
        linksSliderText: "Медицинская помощь больным с онкологическими заболеваниями",
      },
    ],
  },
  getters: {
    allDataSliderRelevant(state) {
      return state.slidersRelevant;
    },
    allDataSliderActual(state) {
      return state.slidersActual;
    },
  },
};
