<template>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
    <NavbarView/>
    <ServiceView id="scrollspyHeading1"/>
    <PartnersView id="scrollspyHeading2"/>
    <InfoView id="scrollspyHeading3"/>
    <ContactView id="scrollspyHeading4"/>
    <FooterView/>
</div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import InfoView from '../components/InfoView.vue'
import PartnersView from '../components/PartnersView.vue'
import ServiceView from '../components/ServiceView.vue'
import ContactView from '../components/ContactView.vue'
import FooterView from '../components/FooterView.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarView,
    InfoView,
    PartnersView,
    ServiceView,
    ContactView,
    FooterView,
  }
  
}
</script>
