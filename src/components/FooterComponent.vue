<template>
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
          <p>Plaça d'Enric Granados, 3</p>
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
          <a href="https://www.facebook.com/people/Sales-Administraci%C3%B3n-de-Fincas/100057124013423/#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://x.com/sales_aaff"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCYa0i3V66VJBys3SEnV7R1A"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.linkedin.com/company/sales-administradores/"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <p class="copy">© 2026 Sales Rodríguez Administradores · Todos los derechos reservados | Aviso Legal | Política de Privacidad | Política de Cookies</p>

    </footer>
</template>

<script setup>

</script>

<style lang="sass">

.footer
  background: radial-gradient(circle at top, #1b1b3a, #0f1020)
  color: white
  padding: 60px 20px 25px
  text-align: center

.footer-container
  max-width: 1200px
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 25px
  margin-bottom: 35px
  width: 100%
  margin: 0 auto
  padding: 0 20px
  box-sizing: border-box

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

.social
  margin-top: 45px

.social-title
  margin-bottom: 16px
  font-weight: 600
  font-size: 20px
  color: #9fb0ff

.social-icons
  display: flex
  justify-content: center
  gap: 18px
  margin-bottom: 25px

.social-icons a
  width: 55px
  height: 55px
  display: flex
  align-items: center
  justify-content: center
  border-radius: 50%
  background: rgba(255,255,255,0.06)
  color: white
  transition: 0.3s
  font-size: 23px
  text-decoration: none

.social-icons a:hover
  background: #9fb0ff
  color: #0f1020
  transform: translateY(-3px)

.copy
  opacity: 0.6
  text-align: center
  font-size: 14px
  color: rgba(255,255,255,.75)
  line-height: 1.7
  letter-spacing: .2px

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