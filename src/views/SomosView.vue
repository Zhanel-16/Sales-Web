<template>
  <section class="team">
    <div class="team-banner">
      <img src="/images/equipo.png" alt="Equipo Sales Rodríguez" />
    </div>
    <div class="hero">
      <p>
        Más de tres décadas ofreciendo una administración de fincas basada en la confianza, la transparencia y la excelencia profesional. Una trayectoria consolidada que nos permite afrontar cada comunidad con cercanía, compromiso y la máxima dedicación.
      </p>
    </div>

    <div class="grid">
      <article class="card">
        <img src="/images/foto.png" alt="José Sales Rodríguez" />

        <h2>José Sales Rodríguez</h2>

        <span class="position"> Administrador de Fincas Colegiado </span>

        <span class="number"> Nº 1.173 </span>

        <p>
          Inicia su trayectoria profesional en 1986 tras obtener el título de
          Administrador de Fincas. Aunque comenzó sus estudios de Ingeniería
          Técnica, orientó finalmente su carrera hacia la gestión y
          administración del patrimonio inmobiliario.
        </p>

        <p>
          Actualmente dirige Sales Rodríguez Administradores, donde desarrolla
          funciones de gerencia, secretaría y administración de comunidades de
          propietarios.
        </p>

        <blockquote>"Experiencia, compromiso y cercanía."</blockquote>
      </article>

      <article class="card">
        <img src="/images/foto.png" alt="Josep Sales Botifora" />

        <h2>Josep Sales Botifora</h2>

        <span class="position"> Abogado · Administrador de Fincas </span>

        <span class="number"> Nº 18.765 · Nº 2.399 </span>

        <p>
          Graduado en Derecho, Máster en Abogacía y especialista universitario
          en Gestión y Administración Inmobiliaria. Dirige el departamento
          jurídico del despacho.
        </p>

        <p>
          Asesora a comunidades de propietarios y representa a clientes en toda
          clase de procedimientos relacionados con la propiedad horizontal.
        </p>

        <blockquote>"Rigor jurídico y soluciones eficaces."</blockquote>
      </article>

      <article class="card">
        <img src="/images/foto.png" alt="Concha Botifora" />

        <h2>Concha Botifora Tarazona</h2>

        <span class="position"> Administradora de Fincas Colegiada </span>

        <span class="number"> Nº 2.222 </span>

        <p>
          Psicóloga de formación, cuenta con una amplia trayectoria en la
          gestión de comunidades de propietarios y desempeña labores de
          interventora del despacho.
        </p>

        <p>
          Es además Auditora Interna ISO 9001 y especialista en calidad y mejora
          continua de procesos.
        </p>

        <blockquote>"Profesionalidad y organización."</blockquote>
      </article>

      <article class="card">
        <img src="/images/foto.png" alt="Eugenia Grimaldi" />

        <h2>Eugenia Grimaldi González</h2>

        <span class="position"> Graduada Social </span>

        <p>
          Responsable del área laboral y fiscal y secretaria de dirección desde
          2001, coordinando la gestión administrativa del despacho.
        </p>

        <blockquote>"Compromiso y dedicación."</blockquote>
      </article>

      <article class="card">
        <img src="/images/foto.png" alt="Pepa Grimaldi" />

        <h2>Pepa Grimaldi González</h2>

        <span class="position"> Auxiliar Administrativa </span>

        <p>
          Especializada en atención al cliente y gestión de incidencias y
          siniestros de las comunidades.
        </p>

        <blockquote>"La cercanía marca la diferencia."</blockquote>
      </article>

      <article class="card">
        <img src="/images/foto.png" alt="Puri Frechina" />

        <h2>Puri Frechina</h2>

        <span class="position"> Auxiliar Administrativa </span>

        <p>
          Responsable de atención al cliente, archivo general y apoyo
          administrativo al resto del equipo.
        </p>

        <blockquote>"La excelencia nace del trabajo bien hecho."</blockquote>
      </article>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="sass" scoped>
// banner foto equipo
.team-banner
  position: relative
  width: 90%
  max-width: 1500px
  margin: 0 auto 80px
  height: 75vh
  min-height: 460px
  max-height: 800px
  overflow: hidden
  border-radius: 18px

  img
    width: 100%
    height: 100%
    object-fit: cover
    display: block

  &::after
    content: ""
    position: absolute
    inset: 0
    background: linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.12))
.overlay
  position: absolute
  left: 50%
  bottom: 60px
  transform: translateX(-50%)
  width: 90%
  max-width: 900px
  text-align: center
  color: white
  z-index: 2

  h1
    font-size: 64px
    font-family: "Cormorant Garamond", serif
    font-weight: 600
    margin-bottom: 18px

  p
    font-size: 20px
    line-height: 1.7
    max-width: 700px
    margin: auto

@media(max-width:900px)

  .team-banner
    height: 55vh
    min-height: 380px

  .overlay

    h1
      font-size: 42px

    p
      font-size: 17px

// estilos despues del banner
.team
  max-width: 1300px
  margin: auto
  padding: 80px 25px

.hero
  // text-align: center
  // margin-bottom: 70px
  max-width: 900px
  margin: 0 auto 70px
  text-align: center
  position: relative
  
  p
    font-family: "Cormorant Garamond", serif
    font-size: clamp(28px, 3vw, 38px)
    line-height: 1.45
    font-size: 23px
    color: white
    font-weight: 500
    letter-spacing: .2px
    max-width: 800px
    margin: auto
  &::after
    content: ""
    display: block
    width: 80px
    height: 2px
    background: #b49662
    margin: 35px auto 0

  h1
    font-size: 38px
    margin-bottom: 15px
    font-weight: 700
    color: #1d2330

    
    &::after
      content: ""
      display: block
      width: 80px
      height: 2px
      background: #b49662
      margin: 35px auto 0

.grid
  display: grid
  grid-template-columns: repeat(2, 560px)
  justify-content: center
  gap: 35px

.card
  background: #fff
  width: 560px
  border: 1px solid #ececec
  border-radius: 12px
  overflow: hidden
  transition: all .25s ease
  padding-bottom: 25px

  &:hover
    transform: translateY(-3px)
    box-shadow: 0 8px 20px rgba(0,0,0,.08)

  img
    width: calc(100% - 40px)
    height: 240px
    margin: 20px auto 0
    display: block
    object-fit: cover
    border-radius: 12px

  h2
    margin: 22px 26px 8px
    font-size: 26px
    font-family: "Cormorant Garamond", serif
    font-weight: 600
    color: #1d2330

.position
  display: block
  margin: 0 26px
  font-size: 12px
  letter-spacing: 2px
  text-transform: uppercase
  font-weight: 600
  color: #9f8553

.number
  display: block
  margin: 8px 28px 18px
  color: #8c8c8c
  font-size: 14px

.card p
  margin: 0 26px 15px
  font-size: 14px
  line-height: 1.8
  color: #666

blockquote
  margin: 25px 28px 0
  padding-top: 18px
  border-top: 1px solid #e6e6e6
  padding-left: 0
  border-left: none
  font-style: italic
  color: #888

@media(max-width:1200px)
  .grid
    grid-template-columns: 560px

@media(max-width:650px)
  .grid
    grid-template-columns: 1fr

  .card
    width: 100%

</style>

<script setup>
</script>
