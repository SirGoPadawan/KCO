<template>
  <header class="container">
    <section class="header__top">
      <div class="header__link header__link_indentation-left">
        <a href="#" class="green">In English</a>
      </div>
      <div class="header__link">
        <a href="#" class="header-eye black">Контрастная версия</a>
      </div>
      <div class="header__link header__link_more-size">
        <a href="#" class="black">Предв. запись: 8 4212 41-06-30</a>
      </div>
      <div class="header__link">
        <a href="#" class="green">Как записаться</a>
      </div>
      <div class="header__link header__link_indentation-right">
        <a href="#" class="green">График работы</a>
      </div>
    </section>
    <section class="header__bottom">
      <div class="header__logo">
        <div>
          <img src="static/logo.png" alt />
        </div>
        <a href="#" class="header__title black">Краевой клинический центр онкологии</a>
      </div>
      <div class="header__hot-line">
        <div>
          <p class="header__text">Горячая линия:</p>
        </div>
        <div class="header__number">
          <a href class="header__phone">8 909 854-74-45</a>
        </div>
      </div>
      <div class="header__address">
        <div class="header__index">
          <p class="header__text">680042, г. Хабаровск,</p>
        </div>
        <div class="header__address">
          <a href class="header__point">Воронежское шоссе, 164</a>
        </div>
      </div>
      <div class="header__reference">
        <div class="social">
          <button id="SocialBtn" class="social-btn btn"></button>
          <div id="SocialLinks" class="social-links">
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
        <div id="map" class="map-items">
          <button @click="isActiveMapMenu=!isActiveMapMenu" class="butter-btn btn"></button>
          <div class="map-site" v-bind:class="[isActiveMapMenu ? 'active' : '']">
            <div class="top__map-site">
              <p class="headline text__map-site">Карта сайта</p>
              <div @click="isActiveMapMenu" class="close-place__map-site">
                <button class="btn__map-site btn">Закрыть</button>
                <div class="close-ico"></div>
              </div>
            </div>
            <div class="bottom__map-site">
              <ul class="box-items__map-site">
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">О центре</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Новости</a>
                    </li>
                    <li>
                      <a href="#">Список работников</a>
                    </li>
                    <li>
                      <a href="#">Орг. структура</a>
                    </li>
                    <li>
                      <a href="#">Профсоюз ККЦО</a>
                    </li>
                    <li>
                      <a href="#">Охрана труда</a>
                    </li>
                    <li>
                      <a href="#">Лицензии</a>
                    </li>
                    <li>
                      <a href="#">Платные услуги</a>
                    </li>
                    <li>
                      <a href="#">Вакансии</a>
                    </li>
                    <li>
                      <a href="#">Фотографии</a>
                    </li>
                    <li>
                      <a href="#">Видеоархив</a>
                    </li>
                    <li>
                      <a href="#">Панорама</a>
                    </li>
                  </ul>
                </li>
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Пациентам</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Как записаться</a>
                    </li>
                    <li>
                      <a href="#">Как подготовиться</a>
                    </li>
                    <li>
                      <a href="#">Важные моменты</a>
                    </li>
                    <li>
                      <a href="#">Выдача результатов</a>
                    </li>
                  </ul>
                </li>
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Наука</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Амурский медицинский журнал</a>
                    </li>
                    <li>
                      <a href="#">Защита диссертаций</a>
                    </li>
                    <li>
                      <a href="#">Исследования клиники</a>
                    </li>
                    <li>
                      <a href="#">Лекции и доклады</a>
                    </li>
                  </ul>
                </li>
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Ядерная медицина</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Пэт</a>
                    </li>
                    <li>
                      <a href="#">О ПЭТ-центра</a>
                    </li>
                    <li>
                      <a href="#">О ПЭТ/КТ-исследовании</a>
                    </li>
                    <li>
                      <a href="#">Что такое ПЭТ</a>
                    </li>
                    <li>
                      <a href="#">Показания и противопоказания</a>
                    </li>
                    <li>
                      <a href="#">Ограничение метода</a>
                    </li>
                    <li>
                      <a href="#">Адрес и контакты</a>
                    </li>
                    <li>
                      <a href="#">Специалисты ПЭТ-центра</a>
                    </li>
                    <li>
                      <a href="#">Фотогалерея</a>
                    </li>
                    <li>
                      <a href="#">Фильм о центре</a>
                    </li>
                    <li>
                      <a href="#">Радиохирургия</a>
                    </li>
                  </ul>
                </li>
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Информация</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Онкологический дайджест</a>
                    </li>
                    <li>
                      <a href="#">Публикации</a>
                    </li>
                    <li>
                      <a href="#">Страховые и медицинские организации</a>
                    </li>
                    <li>
                      <a href="#">Онкология: диагностика</a>
                    </li>
                    <li>
                      <a href="#">Онкология: лечение</a>
                    </li>
                    <li>
                      <a href="#">Онкология: наука</a>
                    </li>
                    <li>
                      <a href="#">Право пациента</a>
                    </li>
                    <li>
                      <a href="#">Психологическая помощь</a>
                    </li>
                    <li>
                      <a href="#">Уполномоченные по правам в РФ</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="box-items__map-site second">
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Сведения</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Телемедицина</a>
                    </li>
                    <li>
                      <a href="#">Льготное лекарственное обеспечение</a>
                    </li>
                    <li>
                      <a href="#">Анкетирование</a>
                    </li>
                    <li>
                      <a href="#">Взгляд со стороны</a>
                    </li>
                    <li>
                      <a href="#">Информация перед записью на прием</a>
                    </li>
                    <li>
                      <a href="#">Полезные ссылки</a>
                    </li>
                  </ul>
                </li>
                <li class="headlines__map-site">
                  <a href="#" class="black item-text_normal">Контакты</a>
                  <ul class="submenu__map-site">
                    <li>
                      <a href="#">Вопросы и ответы</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav class="header__main-menu">
      <ul class="header__menu-items">
        <li class="header__link-item">
          <a href="#" class="black">
            О центре
            <i class="fas fa-sort-down"></i>
          </a>
          <ul class="header__submenu submenu">
            <li class="header__submenu-item">
              <a href="#">Новости</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Лицензии</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Список работников</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Оргструктура</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Платные услуги</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Фотографии</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Видеоархив</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Профсоюз ККЦО</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Панорама</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Охрана труда</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Вакансии</a>
            </li>
          </ul>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Пациентам
            <i class="fas fa-sort-down"></i>
          </a>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Ядерная медицина
            <i class="fas fa-sort-down"></i>
          </a>
          <ul class="header__submenu submenu">
            <li class="header__submenu-item">
              <a href="#">Позитронно-эмиссионная томография</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">О ПЭТ-центре</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">О ПЭТ/КТ исследовании</a>
              <ul class="header__submenu submenu to__right">
                <li class="header__submenu-item">
                  <a href="#" class="green">Что такое ПЭТ</a>
                </li>
                <li class="header__submenu-item">
                  <a href="#" class="green">Показания и противопоказания</a>
                </li>
                <li class="header__submenu-item">
                  <a href="#" class="green">Ограничение метода</a>
                </li>
              </ul>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">Информация для пациента</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">Наш адрес и контакты</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">Специалисты ПЭТ-центра</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">Фотогалерея</a>
            </li>
            <li class="header__submenu-item">
              <a href="#" class="black">Фильм о центре</a>
            </li>
            <li class="header__submenu-item">
              <a href="#">Радиохирургия</a>
            </li>
          </ul>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Информация
            <i class="fas fa-sort-down"></i>
          </a>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Наука
            <i class="fas fa-sort-down"></i>
          </a>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Сведения
            <i class="fas fa-sort-down"></i>
          </a>
        </li>
        <li class="header__link-item">
          <a href="#" class="black">
            Контакты
            <i class="fas fa-sort-down"></i>
          </a>
        </li>
      </ul>
      <form class="form-search">
        <div id="searchBtn" class="search-btn btn"></div>
        <input id="searchPlace" type="text" class="search-place" placeholder="Поиск по сайту..." />
      </form>
    </nav>
  </header>
</template>
