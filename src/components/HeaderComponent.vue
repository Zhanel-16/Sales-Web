<template>
  <header class="header">
    <div class="header-container">
      <div class="logos">
        <img src="/images/VMV.png" alt="Sales" />
        <a href="https://www.marvalencia.com/">
          <img src="/images/VMV.png" alt="Viajes" />
        </a>
      </div>
      <nav class="menu">
        <router-link to="/">INICIO</router-link>
        <router-link to="/quienes-somos">¿QUIÉNES SOMOS?</router-link>
        <router-link to="/servicios-sra">SERVICIOS SRA</router-link>
        <router-link to="/servicios-juridicos">SERVICIOS JURÍDICOS</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/contacto">CONTACTO</router-link>
        <!-- <router-link to="/despacho">DESPACHO 24H</router-link> -->
        <a href="https://despacho.sra.es/">DESPACHO 24H</a>
    
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="sass">

.header
  width: 100%
  background: linear-gradient(90deg, #14142d, #1b1b3a)
  box-shadow: 0 3px 15px rgba(0,0,0,0.25)

.header-container
  max-width: 1500px
  height: 100px
  display: flex
  justify-content: space-between
  align-items: center
  margin: 0 auto
  padding: 0 60px
  box-sizing: border-box
  width: 100%
  margin: 0 auto

.logos
  display: flex
  align-items: center
  gap: 20px

.logos img
  height: 65px
  object-fit: contain
  
.menu
  display: flex
  gap: 25px

.menu a
  text-decoration: none
  color: white
  font-size: 14px
  font-weight: 600
  transition: 0.3s

.menu a:hover
  color: #9fb0ff
</style>