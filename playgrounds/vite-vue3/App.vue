<template>
  <div class="playgrounds">{{ helloWorld() }}</div>
</template>

<script setup lang="ts">
import { helloWorld } from 'mt-template-vue-lib-core'
</script>

<style lang="scss">
.playgrounds {
  background-color: #eee;
}
</style>
