<template>
  <footer class="container">
    <nav class="nav-footer">
      <ul class="nav-footer__items">
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">О центре</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Новости</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Лицензии</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Список работников</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Орг. структура</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Платные услуги</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Фотографии</a>
            </li>
          </ul>
        </li>
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">Пациентам</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Как записаться</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Как подготовиться</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Важные моменты</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Выдача результатов</a>
            </li>
          </ul>
        </li>
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">Информация</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Поликлиника</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Онко-дайджест</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Публикации</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Права пациента</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Онкология: наука</a>
            </li>
          </ul>
        </li>
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">Наука</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Амурский мед.журнал</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Защита диссертаций</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Исследования клиники</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Лекции и доклады</a>
            </li>
          </ul>
        </li>
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">Сведения</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Телемедицина</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Льготные лекарства</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Запись на прием</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Анкетирование</a>
            </li>
            <li class="nav-footer__link">
              <a href="#">Взгляд со стороны</a>
            </li>
          </ul>
        </li>
        <li class="nav-footer__block">
          <a href="#" class="nav-footer__headline-text black">Контакты</a>
          <ul class="nav-footer__block-links">
            <li class="nav-footer__link">
              <a href="#">Вопросы и ответы</a>
            </li>
            <div class="map-site">
              <p class="map-site__text">Карта сайта</p>
            </div>
            <div class="footer-search">
              <p class="footer__text-search">Поиск</p>
              <form class="form-search" id="changeClass">
                <div
                  @click="isActivePlaceHolder = !isActivePlaceHolder"
                  class="search-btn btn"
                ></div>
                <input
                  type="text"
                  class="search-place"
                  placeholder="Поиск по сайту..."
                  v-bind:class="[isActivePlaceHolder ? 'active' : '']"
                />
              </form>
            </div>
            <div id="ap" class="link-youtube">
              <a href="#" class="youtube-img-link"></a>
              <div class="social">
                <button
                  id="btnSocialFooter"
                  @click="isActiveSocial = !isActiveSocial"
                  class="social-btn btn"
                ></button>
                <div
                  id="socialFooter"
                  class="social-links social-links__footer-position"
                  v-bind:class="[isActiveSocial ? 'active' : '']"
                >
                  <p>
                    <a href="#" class="social-item vk black"></a>
                  </p>
                  <p>
                    <a href="#" class="social-item fb black"></a>
                  </p>
                  <p>
                    <a href="#" class="social-item ok black"></a>
                  </p>
                  <p>
                    <a href="#" class="social-item inst black"></a>
                  </p>
                </div>
              </div>
            </div>
          </ul>
        </li>
      </ul>
      <p class="footer-text__bottom">
        Предварительная запись (кроме выходных и праздничных дней) на прием: с 13:00 до
        15:00 по тел.: 8 4212 41-06-30, 41-06-28
      </p>
    </nav>
    <section class="footer-bottom">
      <p>© 1995–2019 «КГБУЗ ККЦО». Перепечатка с разрешения.</p>
      <a href="#">Политика обработки данных.</a>
      <address class="footer-address">
        <a href="#" class="green">Сайт разработан «ТСС».</a>
      </address>
    </section>
  </footer>
</template>
<script>
export default {
  name: "activeClass",
  data: function() {
    return { isActivePlaceHolder: false, isActiveSocial: false };
  },
};
</script>
