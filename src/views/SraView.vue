<template>
  <section class="services">

    <div class="title">
      <span>Nuestros Servicios</span>
      <!-- <h2>Gestionamos y administramos</h2> -->

      <h2>Los servicios que prestamos consisten en el:</h2>
    </div>

    <div class="cards">

      <article class="card">
        <div class="icon">
          <i class="fa-solid fa-scale-balanced"></i>
        </div>

        <h3>Asesoramiento Jurídico, Financiero e Inmobiliario</h3>

        <p>Un equipo especializado que le ofrece confianza, experiencia y cercanía. Nuestro ámbito de gestión abarca toda la ciudad.</p>
      </article>

      <article class="card">
        <div class="icon">
          <i class="fa-solid fa-building"></i>
        </div>

        <h3>Administración Eficaz</h3>

        <p>
          Juntas y reuniones operativas, cuotas y liquidaciones ajustadas,
          contabilidad efectiva y solvente. Seguimiento y control de
          proveedores, impuestos y tasas al día.
        </p>
      </article>

      <article class="card">
        <div class="icon">
          <i class="fa-solid fa-shield-halved"></i>
        </div>

        <h3>Protección Patrimonial</h3>

        <p>
          Zonas comunes listas para disfrutarlas, mantenimiento de la comunidad
          al día, rehabilitación ajustada al presupuesto, instalaciones
          actualizadas e inspecciones realizadas puntualmente.
        </p>
      </article>

      <article class="card">
        <div class="icon">
          <i class="fa-solid fa-handshake"></i>
        </div>

        <h3>Solvencia y Garantía</h3>

        <p>
          Mediación y resolución de conflictos, anticipación y toma de
          decisiones, gestión eficaz de arrendamientos, preparación y
          actualización profesional, responsabilidad y garantía colegial.
        </p>
      </article>

    </div>

  </section>
</template>

<script setup>

</script>

<style scoped lang="sass">
.services
  width: 100%
  background: #f7f8fc
  padding: 110px 40px

.title
  text-align: center
  margin-bottom: 70px

.title span
  display: inline-block
  color: #4d64b5
  font-size: 15px
  font-weight: 700
  text-transform: uppercase
  letter-spacing: 3px
  margin-bottom: 15px

.title h2
  font-size: 30px
  color: #1b1938
  font-weight: 600
  margin-bottom: 20px

.subtitle
  max-width: 700px
  margin: auto
  color: #666
  font-size: 20px
  line-height: 1.8

.cards
  max-width: 1450px
  margin: auto
  display: grid
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr))
  gap: 35px

.card
  background: white
  border-radius: 20px
  padding: 45px
  position: relative
  overflow: hidden
  transition: .45s
  box-shadow: 0 12px 35px rgba(0,0,0,.07)

.card::before
  content: ""
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 5px
  background: linear-gradient(90deg,#1b1938,#4d64b5)

.card:hover
  transform: translateY(-14px)
  box-shadow: 0 30px 60px rgba(0,0,0,.15)

.card:hover .icon
  transform: rotate(-8deg) scale(1.1)

.icon
  width: 78px
  height: 78px
  border-radius: 18px
  background: linear-gradient(135deg,#1b1938,#31459b)
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 30px
  transition: .4s

.icon i
  color: white
  font-size: 32px

.card h3
  color: #1b1938
  font-size: 27px
  line-height: 1.35
  margin-bottom: 22px
  font-weight: 700

.card p
  color: #666
  line-height: 1.9
  font-size: 17px

@media(max-width:900px)

  .services
    padding: 70px 25px

  .title h2
    font-size: 38px

  .subtitle
    font-size: 18px

  .card
    padding: 35px
</style>