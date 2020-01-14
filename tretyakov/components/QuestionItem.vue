<template>
  <div class="question-item">
    <div class="question-item__container">
      <div class="question-item__title">{{ title }}</div>
      <div class="question-item__btn" v-bind:class="{ reversed: showQuestionText }" @click="showQuestionText ? showQuestionText=false : showQuestionText=true">
        <span></span>
      </div>
      <div class="question-item__text-container" v-bind:class="{ hidden: !showQuestionText }">
        <p class="question-item__text" v-for="text in texts" v-bind:key="text.id">{{ text }}</p>
      </div>
    </div>
    <hr class="question__separate-line">
  </div>
</template>

<script>
export default {
  data: function () {
      return { showQuestionText: false };
    },
  props: {
    title: String, 
    texts: Array
  },
}
</script>