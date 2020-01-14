<template>
  <section class="about">
    <div class="container">
      <div class="about__title-wrapper about__title">
        <h1 class="about__title about__title-text">Привет.<br>Скоро здесь будет музей&nbsp;<span class="important-text">|</span></h1>
      </div>
      <div class="about__container">
        <div class="about__content-container">
          <div class="about__image-block">
            <img class="about__image" src="/images/main-photo.jpg" alt="картинка музея">
          </div>
          <div class="about__image-description">
            <div class="about__image-description-text-block">
              <div class="about__image-description-text-title">
                О будущем комплексе
              </div>
              <div class="about__image-description-text">
                Мы собрали всё, что сейчас известно о новом музейном центре во Владивостоке.
              </div>
            </div>
            <a href="place.html" class="about__image-description-button">
              <img src="/images/white-right-arrow.svg" alt="кнопка с ссылкой на страницу - место музея">
            </a>
          </div>
          <hr class="content-line">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import about from './../assets/js/about';

export default {
  mounted: function () {
    about();
  }
}
</script>
