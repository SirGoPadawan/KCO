<template>
  <main class="container">
    <section class="main-content">
      <the-slider-main class="main-content__slider" />
      <article class="main-content__right-collumn">
        <div class="main-content__collumn-item green-ground white">
          <p class="main-content__text item-text_semibold">
            Онкологическое заболевание: как защититься от рака?
          </p>
        </div>
        <div class="main-content__collumn-item blue-ground white">
          <p class="main-content__text item-text_semibold">
            <q>Дорожная карта</q> Министерства здравохранения Хабаровского края
          </p>
        </div>
        <div class="main-content__collumn-item aqua-ground blue">
          <p class="main-content__text item-text_semibold">
            Состоялся визит японской делегации
          </p>
        </div>
        <div class="main-content__collumn-item item-border black">
          <p class="main-content__questions">
            По вопросам льготных лекарств звоните с 14:00 до 16:00 по тел.:
            <br />
            <span class="main-content__phone">8 4212 41-06-45</span>
            <br />
            <span class="main-content__all-phones green">Все телефоны</span>
          </p>
        </div>
      </article>
    </section>
    <section class="news">
      <header class="headline-top">
        <a href="#" class="headline blue">Новости</a>
        <a href="#" class="archive smoke">Архив</a>
      </header>
      <div class="news__collums">
        <article class="news__collumn-item">
          <div>
            <img src="static/middle_1.png" class="news__collumn-img item-img" alt />
          </div>
          <div>
            <time datetime="2018-08-27" class="time position smoke">27 ноября</time>
            <a href="#" class="news__collumn-ico watch"></a>
            <p class="news__text item-text_extrabold left">
              Профилактика рака груди. Школа здоровья. GuberniaTV
            </p>
            <a href="#" class="link_reverse news-position item-text_extrabold green white"
              >Смотреть</a
            >
          </div>
        </article>
        <article class="news__collumn-item">
          <div>
            <img src="static/middle_2.png" class="news__collumn-img item-img" alt />
          </div>
          <div>
            <time datetime="2018-10-27" class="time position smoke">27 октября</time>
            <a href="#" class="news__collumn-ico read"></a>
            <p class="news__text item-text_extrabold right">
              <q>Таргетная терапия метастатического рака молочной железы</q>
            </p>
            <a href="#" class="link_reverse news-position item-text_extrabold blue white"
              >Читать</a
            >
          </div>
        </article>
      </div>
      <div class="news-rows">
        <article class="news-row__box">
          <div class="news__box-img">
            <img src="static/new-bottom-img.png" alt class="item-img" />
          </div>
          <div class="news-row__box item second">
            <time datetime="2018-10-27" class="time smoke">27 октября</time>
            <p class="news-row__text-style item-text_semibold">
              Онкологические заболевания: как защититься от рака? Школа здоровья.
              GuberniaTV
            </p>
            <a href="#" class="btn-link green">Смотреть</a>
          </div>
        </article>
        <article class="news-row__box item">
          <time datetime="2018-10-27" class="time smoke">25 октября</time>
          <p class="news-row__text-style item-text_semibold">
            Визит коллег из г. Кванчжу. Наш онкологический центр посетила делегация
          </p>
          <a href="#" class="btn-link blue">Читать</a>
        </article>
        <article class="news-row__box item">
          <time datetime="2018-10-27" class="time smoke">5 октября</time>
          <p class="news-row__text-style item-text_semibold">
            Проект Центра протонно-лучевой терапии в Хабаровске
          </p>
          <a href="#" class="btn-link green">Смотреть</a>
        </article>
      </div>
    </section>
    <the-nav-info />
    <section class="relevant">
      <the-relevant-slider />
    </section>
    <section class="digest-main">
      <header class="headline-top">
        <a href="#" class="headline blue">Онко-дайджест</a>
        <a href="#" class="archive smoke">Архив</a>
      </header>
      <div class="digest__box">
        <article class="digest__box item">
          <div class="digest__box-img">
            <img src="static/digest-img-1.png" class="item-img" alt />
          </div>
          <time datetime="2018-10-27" class="digest-time_style time smoke"
            >27 октября</time
          >
          <p class="digest-text_style item-text_semibold">
            Сергей Тюляндин: частота рака почки, простаты и молочной железы растет, а рака
            легкого - снижается
          </p>
          <a href="#" class="btn-link digest blue">Материал</a>
        </article>
        <article class="digest__box item">
          <div class="digest__box-img">
            <img src="static/digest-img-2.png" class="item-img" alt />
          </div>
          <time datetime="2018-10-17" class="digest-time_style time smoke"
            >17 октября</time
          >
          <p class="digest-text_style item-text_semibold">
            Рак толстого кишечника у женщин молодеет из-за ожирения
          </p>
          <a href="#" class="btn-link digest blue">Материал</a>
        </article>
        <article class="digest__box item">
          <div class="digest__box-img">
            <img src="static/digest-img-3.png" class="item-img" alt />
          </div>
          <time datetime="2018-10-27" class="digest-time_style time smoke"
            >27 октября</time
          >
          <p class="digest-text_style item-text_semibold">
            Российские противоопухолевые препараты на основе онколитических вирусов могут
            появиться
          </p>
          <a href="#" class="btn-link digest blue">Материал</a>
        </article>
      </div>
    </section>
    <section class="public">
      <header class="headline-top">
        <a href="#" class="headline blue">Публикации</a>
        <a href="#" class="archive smoke">Архив</a>
      </header>
      <div class="public__bottom-item">
        <div class="public__collumn">
          <article class="public__box">
            <div class="public__box-img">
              <img src="static/public-img-1.png" alt class="item-img" />
            </div>
            <div class="public-box__item_style">
              <time datetime="2018-08-27" class="time smoke">27 ноября</time>
              <p class="item-text_semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsam!
              </p>
              <a href="#" class="btn-link blue">Читать</a>
            </div>
          </article>
          <article class="public__box">
            <div class="public__box-img">
              <img src="static/public-img-2.png" alt class="item-img" />
            </div>
            <div class="public-box__item_style">
              <time datetime="2018-08-27" class="time smoke">27 ноября</time>
              <p class="item-text_semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, cumque.
              </p>
              <a href="#" class="btn-link blue">Читать</a>
            </div>
          </article>
          <article class="public__box">
            <div class="public__box-img">
              <img src="static/public-img-3.png" alt class="item-img" />
            </div>
            <div class="public-box__item_style">
              <time datetime="2018-08-27" class="time smoke">27 ноября</time>
              <p class="item-text_semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, tempora.
              </p>
              <a href="#" class="btn-link blue">Читать</a>
            </div>
          </article>
        </div>
        <div class="public__box-right">
          <div class="public__box-right__img">
            <img src="static/public-img-4.png" alt class="public__img-right item-img" />
          </div>
          <div class="public__box-right__items">
            <time datetime="2018-08-27" class="public__time time smoke">27 ноября</time>
            <p class="public-text item-text_extrabold">
              <q>Хабаровский край - образ будущего</q>: завершение полной технологической
              структуры краевого клинического
            </p>
            <a href="#" class="public__link link_reverse item-text_extrabold blue white"
              >Читать</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="links-slider">
      <the-actual-slider />
    </section>
    <section class="about">
      <header class="headline-top">
        <a href="#" class="headline blue">О центре</a>
        <a href="#" class="archive smoke">Фотографии</a>
      </header>
      <article class="about-collumns">
        <div class="about-collumns__box-left">
          <div class="about-collumns__text">
            <p class="about-text item-text_semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod hic
              facilis consequatur dignissimos cum sequi reprehenderit assumenda dolorem
              excepturi.
            </p>
            <p class="item-text_semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod hic
              facilis consequatur dignissimos cum sequi reprehenderit assumenda dolorem
              excepturi.
            </p>
            <p class="item-text_semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod hic
              facilis consequatur dignissimos cum sequi reprehenderit assumenda dolorem
              excepturi.
            </p>
          </div>
          <div class="about-collumns__link">
            <a href="#" class="link_reverse blue item-text_extrabold white">Читать</a>
          </div>
        </div>
        <div class="about-collumns__box-right">
          <img src="static/about.png" alt class="item-img" />
        </div>
      </article>
    </section>
  </main>
</template>
<script>
export default {
  components: {
    "the-slider-main": () => import("./TheSliderMain.vue"),
    "the-relevant-slider": () => import("./TheRelevantSlider.vue"),
    "the-actual-slider": () => import("./TheActualSlider.vue"),
    "the-nav-info": () => import("./TheNavInfo.vue"),
  },
};
</script>
