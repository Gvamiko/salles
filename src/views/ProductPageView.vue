<template>
  <div>
    <NavbarView/>
    <div class="container">
      <div class="row matg-t justify-content-between">
        <div class="col-md-6">
            
        </div>
        <div class="col-md-6">
            <div class="descr">
                <h5>ძირითადი მახასიათებლები:</h5>
                <ul>
                  <li>
                    <span>
                      პორტები: 8 x 10/100/1000 Base-T, 1 × 1GBase-X SFP
                    </span>
                  </li>
                  <li>
                    <span>
                      Fixed WAN Port: 1×10/100/1000 Base-T
                    </span>
                  </li>
                  <li>
                    <span>
                      Fixed LAN Port(s): 7×10/100/1000 Base-T, 1×1GBase-X SFP
                    </span>
                  </li>
                  <li>
                    <span>
                      LAN/WAN Switchable Port(s): 2×10/100/1000 Base-T, 1×1GBase-X SFP
                    </span>
                  </li>
                  <li>
                    <span>
                      CPU: Dual Core, 880MHz
                    </span>
                  </li>
                  <li>
                    <span>
                      RAM: 256MB
                    </span>
                  </li>
                  <li>
                    <span>
                      FLASH: 32MB
                    </span>
                  </li>
                  <li>
                    <span>
                      გამტარუნარიანობა : 600Mbps
                    </span>
                  </li>
                  <li>
                    <span>
                      მაქსიმალური მომხმარებლების რაოდენობა : 200
                    </span>
                  </li>
                  <li>
                    <span>
                      WAN Load Balancing
                    </span>
                  </li>
                  <li>
                    <span>
                      Power Supply: 100～240V AC, 50/60Hz
                    </span>
                  </li>
                  <li>
                    <span>
                      წონა: 0.5 kg
                    </span>
                  </li>
                  <li>
                    <span>
                      ზომა : 202 mm x 108 mm x 28 mm  
                    </span>
                  </li>
                  <li>
                    <span>
                      სერთიფიკატები: CE, ROHS
                    </span>
                  </li>
                </ul>
              
              
            </div>
        </div>
      </div>
    </div>
    <ContactView/>
    <FooterView class="bottom-0 position-absolute w-100"/>
</div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue'
import ContactView from '../components/ContactView.vue'
import FooterView from '../components/FooterView.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarView,
    ContactView,
    FooterView,
  } 
}
</script>
