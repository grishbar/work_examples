<template>
    <div class="page-title-container">
        <h2 class="page-title">{{ title }} <span class="important-text">|</span></h2>
        <p class="page-subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>