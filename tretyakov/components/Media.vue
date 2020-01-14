<template>
  <section class="media">
    <div class="media-container">
      <!-- Slider main container -->
      <div class="swiper-container swiper-media">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide media__slide media__slide-1">
            <div class="swiper-title">
              медиа
            </div>
            <div class="media__slide-title">
              История районов — исторический экскурс по районам Владивостока
            </div>
            <div class="media__slide-text">
              Собрали альтернативный гид по Владивостоку, как живут районы и кто их типичный житель
            </div>
          </div>
          <div class="swiper-slide media__slide media__slide-2">
            <div class="swiper-title">
              медиа
            </div>
            <div class="media__slide-title">
              История районов — исторический экскурс по районам Владивостока
            </div>
            <div class="media__slide-text">
              Собрали альтернативный гид по Владивостоку, как живут районы и кто их типичный житель
            </div>
          </div>
          <div class="swiper-slide media__slide media__slide-3">
            <div class="swiper-title">
              медиа
            </div>
            <div class="media__slide-title">
              История районов — исторический экскурс по районам Владивостока
            </div>
            <div class="media__slide-text">
              Собрали альтернативный гид по Владивостоку, как живут районы и кто их типичный житель
            </div>
          </div>
        </div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev swiper-button-prev-media" />
        <div class="swiper-button-next swiper-button-next-media" />
      </div>
    </div>
  </section>
</template>

<script>
import media from './../assets/js/media';

export default {
  mounted: function () {
    media(this);
    this.$nextTick(() => {
      this.mediaSwiper.update();
    });
  }
}

</script>
