<template>
  <section class="main-content">
    <section class="news">
      <div class="container">
        <PageTitle 
          title="Новости"
        />
        <NewsItem v-for="newsItem in newsData"
          :key="newsItem.id"
          :title="newsItem.title + newsItem.id"
          :id="newsItem.id"
        />
      </div>
      <!--так сделано, чтобы last-child у новостей применился к последней новости-->
      <div class="container">
        <div class="news__more-news-button" v-if="showItemsCount < allNewsAmount" @click="addNewsItemsAmount">Ещё новости</div>
      </div>
    </section>
    <SubscribeBlock />
  </section>
</template>

<script>
import NewsItem from '~/components/NewsItem.vue'
import SubscribeBlock from '~/components/SubscribeBlock.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
    data: function () {
      return { newsData: [], showItemsCount: 10, allNewsAmount: 14}; // 14 - заменить на количество всех новостей
    },
    methods: {
      getNewsData() {
        let itemsAmount = Math.min(this.showItemsCount, this.allNewsAmount); 
        for (let i = this.newsData.length; i < itemsAmount; i++) {
          // получение новостей и их id из админки
          this.newsData.push({title: 'Состоялся семинар для музейных специалистов «Целая выставка»', id: i + 1});
        }
        return this.newsData;
      },
      addNewsItemsAmount() {
        this.showItemsCount += 10;
        return this.newsData = this.getNewsData();
      }
    },
    created() {
      this.getNewsData()
    },
    components: {
      NewsItem,
      SubscribeBlock,
      PageTitle
    }
}
</script>
