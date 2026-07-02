<template>
  <section>
  <section class="hero">
    <div class="overlay">
      <div class="content">
        <h2>Sales</h2>
        <h1>Administración<br>de Fincas</h1>

        <p>"Somos una empresa especialista en la administración de fincas en Valencia. Disfruta tu casa, nosotros nos encargamos de que nada falle".</p>
        <button>Contáctenos</button>

      </div>
    </div>
  </section>
  </section>
</template>
<script setup>

</script>

<style scoped lang="sass">
.hero
  width: 100%
  height: calc(100vh - 100px)
  background: url('/images/hero.png') center center/cover no-repeat
  position: relative

.overlay
  width: 100%
  height: 100%
  background: rgba(255,255,255,.08)
  display: flex
  align-items: center

.content
  max-width: 600px
  margin-left: 50%
  color: #1b1938

h2
  font-size: 51px
  font-weight: 800
  line-height: 1.1

h1
  font-size: 51px
  font-weight: 800
  line-height: 1.1
  margin: 10px 0 25px

p
  font-size: 18px
  line-height: 1.7
  font-weight: 500
  margin-bottom: 30px

button
  padding: 15px 32px
  font-size: 17px
  border: none
  border-radius: 10px
  background: #1d1a3f
  color: white
  font-weight: 600
  cursor: pointer
  transition: .3s

button:hover
  background: #34306c

@media(max-width:1200px)

  .content
    margin: auto
    padding: 30px

  h1
    font-size: 60px

  h2
    font-size: 52px

  p
    font-size: 20px

@media(max-width:768px)

  .hero
    height: 80vh

  .content
    margin: auto
    text-align: center

  h1
    font-size: 46px

  h2
    font-size: 40px

  p
    font-size: 18px
</style>