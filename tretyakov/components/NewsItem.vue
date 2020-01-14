<template>
  <div class="news__item-container">
    <div class="news__item">
      <div class="news__text">
        {{ title }}
      </div>
      <nuxt-link :to="'/news/' + id" class="news__read-button">
      <img src="/images/black-right-arrow.svg" alt="кнопка прочитать новость">
      </nuxt-link>
    </div>
    <hr class="news__separate-line">
  </div>
</template>

<script>
export default {
  props: ['title', 'id']
}
</script>