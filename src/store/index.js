import { createStore } from 'vuex'
import headerModule from './HeaderModule'
import carouselModule from './CarouselModule'
import abilityModule from './AbilityModule'
import experienceyModule from './ExperienceModule'
import projectsModule from './ProjectsModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    headerModule,
    carouselModule,
    abilityModule,
    experienceyModule,
    projectsModule
  }
})
