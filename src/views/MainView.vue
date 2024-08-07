<template>
  <div>
  <NavbarView/>
 
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12 mt-4">
          <div class="wall">
            
          </div>
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
