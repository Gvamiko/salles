<template>
  <div>
  <NavbarView/>
 
    <div class="container">
        <div class="row mt-5 borde-manual">
          <div class="col-md-6 left original-transform position-relative">
            <div class="block-green position-absolute bottom-0 start-0 z-2"></div>
            <div class="main position-absolute">
              <h1>Gigi Dolmazashvili</h1>
            </div>
          </div>
          <div class=" col-md-6 right original-transform position-relative">
            <div class="main position-absolute">
              <h1>Gigi Dolmazashvili</h1>
            </div>
            <div class="block-red position-absolute top-0 end-0 z-2"></div>
          </div>
        </div>
        
    </div>
 
</div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarView,
  }
}
</script>
