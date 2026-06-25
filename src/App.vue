<script setup>
</script>

<template>
  <div class="app">

    <header class="header">
      <div class="header-container">

        <div class="logos">
          <img src="/images/VMV.png" alt="Sales">
          <a href="https://www.marvalencia.com/">
            <img src="/images/VMV.png" alt="Viajes">
          </a>
          
        </div>
        <nav class="menu">
          <a href="#">INICIO</a>
          <a href="#">¿QUIÉNES SOMOS?</a>
          <a href="#">SERVICIOS SRA</a>
          <a href="#">SERVICIOS JURÍDICOS</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACTO</a>
        </nav>

      </div>
    </header>

    <main>
      <!-- <router-view /> -->
      <h1>Contenido de cada View</h1>
    </main>

    <footer class="footer">

      <div class="footer-container">

        <div class="footer-card">
          <i class="fa-solid fa-envelope icon"></i>
          <h3>Email</h3>
          <p>administrador@sra.es</p>
        </div>

        <div class="footer-card">
          <i class="fa-solid fa-location-dot icon"></i>
          <h3>Dirección</h3>
          <p>Sales Rodríguez Administradores S.L</p>
          <p>Plça d'Enric Granados, 3</p>
          <p>46018 València</p>
        </div>

        <div class="footer-card">
          <i class="fa-solid fa-phone icon"></i>
          <h3>Teléfono</h3>
          <p>0034 963 789 248</p>
          <p>Urgencias 24h</p>
          <p>691 441 363</p>
        </div>

      </div>

      <div class="social">
        <div class="social-title">Síguenos</div>

        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <p class="copy">© 2025 SRA - Todos los derechos reservados</p>

    </footer>

  </div>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

// body
//   font-family: Arial, sans-serif
//   background: #0f1020
  

.app
  min-height: 100vh
  display: flex
  flex-direction: column

.header
  background: linear-gradient(90deg, #14142d, #1b1b3a)
  box-shadow: 0 3px 15px rgba(0,0,0,0.25)

.header-container
  max-width: 1500px
  margin: auto
  height: 100px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 30px

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

main
  flex: 1

.footer
  background: radial-gradient(circle at top, #1b1b3a, #0f1020)
  color: white
  padding: 60px 20px 25px
  text-align: center

.footer-container
  max-width: 1200px
  margin: auto
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 25px
  margin-bottom: 35px

.footer-card
  background: rgba(27, 27, 58, 0.85)
  backdrop-filter: blur(6px)
  -webkit-backdrop-filter: blur(6px)
  transform: translateZ(0)
  border: 1px solid rgba(255,255,255,0.08)
  border-radius: 16px
  padding: 28px
  transition: all 0.35s ease
  cursor: pointer

.footer-card:hover
  transform: translateY(-10px)
  box-shadow: 0 15px 35px rgba(0,0,0,0.5)
  border-color: rgba(159,176,255,0.4)

.icon
  font-size: 28px
  color: #9fb0ff
  margin-bottom: 12px

.footer-card h3
  margin-bottom: 10px
  color: #9fb0ff

.footer-card p
  font-size: 14px
  opacity: 0.9
  line-height: 1.5

.social-title
  margin-bottom: 12px
  font-weight: 600
  color: #9fb0ff

.social-icons
  display: flex
  justify-content: center
  gap: 18px
  margin-bottom: 25px

.social-icons a
  width: 42px
  height: 42px
  display: flex
  align-items: center
  justify-content: center
  border-radius: 50%
  background: rgba(255,255,255,0.06)
  color: white
  transition: 0.3s
  font-size: 16px

.social-icons a:hover
  background: #9fb0ff
  color: #0f1020
  transform: translateY(-3px)

.copy
  font-size: 12px
  opacity: 0.6

@media (max-width: 900px)
  .footer-container
    grid-template-columns: 1fr
    text-align: center

  .menu
    display: none

  .header-container
    justify-content: center
    gap: 20px
</style>