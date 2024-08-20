<template>
  <div>
  <NavbarView/>
  <ServiceView/>
  <PartnersView/>
  <infoView/>
    
 
</div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import infoView from '../components/InfoView.vue'
import PartnersView from '../components/PartnersView.vue'
import ServiceView from '../components/ServiceView.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    infoView,
    PartnersView,
    ServiceView,
  }
  
}
</script>
