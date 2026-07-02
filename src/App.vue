<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <main>
      <router-view />
      <!-- <h1>Contenido de cada View</h1> -->
    </main>
    <FooterComponent />
  </div>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

html, body
  margin: 0
  padding: 0
  width: 100%
  overflow-x: hidden

body
  font-family: Arial, sans-serif
  background: #0f1020
  min-height: 100vh
.app
  min-height: 100vh
  display: flex
  flex-direction: column
  width: 100%
  overflow-x: hidden

main
  flex: 1

</style>