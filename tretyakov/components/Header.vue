<template>
  <header class="header">
    <div class="hamburger-menu">
      <input id="hamburger-menu__toggle" type="checkbox">
      <label class="hamburger-menu__btn" for="hamburger-menu__toggle">
        <span></span>
      </label>
      <nuxt-link to="/" class="header__coordinates">
        43.118125<span class="header__coordinates-degrees">°</span> 131.897790<span class="header__coordinates-degrees">°</span>
      </nuxt-link>
      <ul class="hamburger-menu__box">
        <li><nuxt-link to="/place" class="hamburger-menu__item">место</nuxt-link></li>
        <li><nuxt-link to="/questions" class="hamburger-menu__item">вопросы</nuxt-link></li>
        <li><nuxt-link to="/news" class="hamburger-menu__item">новости</nuxt-link></li>
        <li><nuxt-link to="/media" class="hamburger-menu__item">медиа</nuxt-link></li>
      </ul>
      <div class="hamburger-menu__search">
        искать<input type="text" placeholder="|">
      </div>
    </div>
  </header>
</template>


<script>
import header from './../assets/js/header';

export default {
  mounted: function () {
    header();
  }
}
</script>
