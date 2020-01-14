<template>
    <section class="questions">
        <div class="container">
            <PageTitle 
            title="Вопросы"
            subtitle="Владивосток — это конечный пункт Транссибирской магистрали, граница одной культурной традиции и начала другой. Теперь в самом далеком регионе России можно будет увидеть работы из коллекции московского Музея."
            />
            <QuestionItem v-for="questionItem in questionData"
                :key="questionItem.id"
                :title="questionItem.title"
                v-bind:texts="questionItem.texts"
            />
            <div class="questions__more-questions-button" v-if="showItemsCount < allQuestionsAmount" @click="addQuestionsItemsAmount">Ещё вопросы</div>
            <QuestionAskForm />
        </div>
    </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import QuestionItem from '~/components/QuestionItem.vue'
import QuestionAskForm from  '~/components/AskYourQuestion.vue'

export default {
    data: function () {
      return {questionData: [
          {
              title: "Зачем Владивостоку филиал Третьяковской галереи? И кто это спонсирует?",
              texts: ['Владивосток — это конечный пункт Транссибирской магистрали, граница одной культурной традиции и начала другой. Теперь в самом далеком регионе России можно будет увидеть работы из коллекции московского Музея.',
            'Филиал Третьяковской галереи будет находиться в пространстве музейного комплекса, разделяя общую площадку с концертным залом Мариинского театра и Высшим учебным заведением. При этом, каждая институция будет иметь свое отдельное здание, построенное по новейшим архитектурным разработкам. Все три учреждения будут между собой взаимодействовать. Так, выпускники ВУЗа могут надеяться на трудоустройство в Музее.',
            'Музейный комплекс транслирует идею создания нового облика региона  — современного города и порта культур. Теперь необязательно ездить далеко, чтобы увидеть качественное мировое искусство.',
            'Строительство спонсирует фонд «Культурное наследие», а наполнение Музея (организацию выставок, расширение команды) — Министерство культуры в рамках федерального нацпроекта.']
          },
          {
              title: "Где это все находится?",
              texts: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!']
          },
          {
              title: "Как будет меняться городская среда с появлением большого Музея?",
              texts: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!']
          },
          {
              title: "Вопрос про инклюзию и доступную среду: что планируется с этим в музее?",
              texts: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!']
          },
          {
              title: "Где это все находится?",
              texts: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!']
          },
          ] , showItemsCount: 5, allQuestionsAmount: 7};
    },
    components: {
      PageTitle,
      QuestionItem,
      QuestionAskForm
    },
    methods: {
      getQuestionsItemsAmount() {
        let itemsAmount = Math.min(this.showItemsCount, this.allQuestionsAmount); 
        for (let i = this.questionData.length; i < itemsAmount; i++) {
          this.questionData.push({title: 'Lorem ipsum dolor?', texts: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus exercitationem dignissimos nisi! Repellendus temporibus nam rem, quas quae dolorem quisquam perferendis aperiam cupiditate sit, ipsum obcaecati odit culpa deserunt. Quibusdam!']});
        }
        return this.questionData;
      },
      addQuestionsItemsAmount() {
        this.showItemsCount += 5;
        return this.questionData = this.getQuestionsItemsAmount();
      }
    },
}
</script>
