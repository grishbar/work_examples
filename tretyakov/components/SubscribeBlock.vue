<template>
  <section class="subscribe-block">
    <div class="container">
      <div class="subscribe-block__title">
        Подпишитесь на рассылку новостей
      </div>
      <form id="subscribe-form" class="subscribe-block__form">
        <div class="subscribe-block__input-container">
          <input id="email" type="email" class="subscribe-block__email-input" placeholder="Ваш e-mail">
          <button type="submit" class="subscribe-block__subscribe-button">
            Подписаться
          </button>
        </div>
        <div class="subscribe-block__wrong-input hidden">
          Пожалуйста, введите корректный e-mail адрес
        </div>
        <div class="subscribe-block__agreement">
          Нажимая кнопку «Подписаться», я принимаю <a href="https://www.tretyakovgallery.ru/upload/privacy_policy_gtg_museum.pdf">условия&nbsp;пользовательского соглашения </a>
          и соглашаюсь на <a href="https://www.tretyakovgallery.ru/upload/privacy_policy_gtg_museum.pdf">обработку персональных данных.</a>
        </div>
      </form>
      <button type="button" class="subscribe-block__thanks-button hidden">
        Спасибо
      </button>
    </div>
  </section>
</template>

<script>
import subscribeblock from './../assets/js/subscribe-block';

export default {
  mounted: function () {
    subscribeblock();
  }
}
</script>
