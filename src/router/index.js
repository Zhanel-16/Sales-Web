import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import SomosView from '../views/SomosView.vue'
import SraView from '../views/SraView.vue'
import JuridicosView from '../views/JuridicosView.vue'
import BlogView from '../views/BlogView.vue'
import ContactoView from '../views/ContactoView.vue'
import DespachoView from '../views/DespachoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'inicio', component: InicioView},
    {path: '/quienes-somos', name: 'somos', component: SomosView},
    {path: '/servicios-sra', name: 'sra', component: SraView},
    {path: '/servicios-juridicos', name: 'juridicos', component: JuridicosView},
    {path: '/blog', name: 'blog', component: BlogView},
    {path: '/contacto', name: 'contacto', component: ContactoView},
    {path: '/despacho', name: 'despacho', component: DespachoView}
  ]
})

export default router