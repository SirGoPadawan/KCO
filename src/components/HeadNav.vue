<template>
  <nav class="header__main-menu">
    <ul class="header__menu-items">
      <li class="header__link-item">
        <a href="#" class="black">
          О центре
          <i class="fas fa-sort-down"></i>
        </a>
        <ul class="header__submenu submenu">
          <li class="header__submenu-item">
            <!-- <a href="#">Новости</a> -->
            <router-link to="/TheNews">Новости</router-link>
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
      <div
        @click="isActivePlaceHolder = !isActivePlaceHolder"
        class="search-btn btn"
      ></div>
      <input
        v-bind:class="[isActivePlaceHolder ? 'active' : '']"
        type="text"
        class="search-place"
        placeholder="Поиск по сайту..."
      />
    </form>
  </nav>
</template>
<script>
export default {
  name: "statusClassHeadNav",
  data: function() {
    return { isActivePlaceHolder: false };
  },
};
</script>
