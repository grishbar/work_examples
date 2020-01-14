<template>
  <section class="main-content">
    <About />
    <Media />
    <section class="news">
      <div class="container">
        <nuxt-link to="/news" class="news__title">новости</nuxt-link>
        <NewsItem 
          :title="newsData[0].title"
          :id="newsData[0].id"
        />
        <NewsItem 
          :title="newsData[1].title"
          :id="newsData[1].id"
        />
      </div>
    </section>
    <SubscribeBlock />
  </section>
</template>

<script>
import About from '~/components/About.vue'
import Media from '~/components/Media.vue'
import NewsItem from '~/components/NewsItem.vue'
import SubscribeBlock from '~/components/SubscribeBlock.vue'

export default {
    data: function () { 
      // получение двух новостей и их id из админки
      return { newsData: 
        [ 
          {title: 'Главный архитектор бюро SPEECH Сергей Чобан представил проект музейного комплекса', id: '1'},
          {title: 'Состоялся семинар для музейных специалистов «Целая выставка»', id: '2'}
        ]
      }
    },
    components: {
      About,
      Media,
      NewsItem,
      SubscribeBlock
    }
}
</script>
