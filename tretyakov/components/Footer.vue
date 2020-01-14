<template>
  <footer>
    <div class="container">
      <hr>
      <div class="footer__row">
        <div class="footer__navigation">
          <div class="footer__navigation-two-items">
            <nuxt-link to="/place" class="footer__navigation-item">место</nuxt-link>
            <nuxt-link to="/questions" class="footer__navigation-item">вопросы</nuxt-link>
          </div>
          <div class="footer__navigation-two-items">
            <nuxt-link to="/media" class="footer__navigation-item">медиа</nuxt-link>
            <nuxt-link to="/news" class="footer__navigation-item">новости</nuxt-link>
          </div>
        </div>
        <div class="footer__icons">
          <a href="https://www.tretyakovgallery.ru/" class="footer__icon">
            <img src="/images/tretyakov-logo.svg" alt="ссылка на сайт третьяковской галереи">
          </a>
          <a href="https://www.mkrf.ru/" class="footer__icon">
            <img src="/images/rf-culture-logo.svg" alt="ссылка на сайт министерство культуры российской федерации">
          </a>
          <a href="http://www.fondnkn.ru/" class="footer__icon">
            <img src="/images/nch-logo.svg" alt="ссылка на сайт фонда национального культурного наследия">
          </a>
        </div>
      </div>
      <div class="footer__row">
        <div class="confidentional-policy-container">
          <a href="https://www.tretyakovgallery.ru/upload/privacy_policy_gtg_museum.pdf" class="confidentional-policy">Политика конфиденциальности</a>
        </div>
        <div class="footer__authors">
          <a href="https://www.tretyakovgallery.ru/upload/privacy_policy_gtg_museum.pdf" class="tretyakov-gallery">Национальный проект «Культура» <br> 2020 © Государственная Третьяковская галерея</a>
          <a href="https://artel.media/" class="artel-media">made by artel.media</a>
        </div>
      </div>
    </div>
  </footer>
</template>
