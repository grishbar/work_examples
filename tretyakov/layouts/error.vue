<template>
  <div>
    <Header />
    <section class="error-404">
      <div class="container">
          <div class="error-404__container">
              <div class="error-404__number">404</div>
              <div class="error-404__text">
                Пока у нас тут стройка. Посмотрите, как будет выглядеть будущий <nuxt-link to="/place">музейный комплекс</nuxt-link>, или начните с  <nuxt-link to="/">главной</nuxt-link>.
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  props: ['error'],
  layout: 'empty', // you can set a custom layout for the error page
  components: {
    Header,
  }
}
</script>

