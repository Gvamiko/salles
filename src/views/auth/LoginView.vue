<template>
  <div>
    <NavbarView/>
    <div class="container d-flex align-items-center con-h">
      <div class="row row-h justify-content-center align-items-center">
        <div class="col-md-5 col-10">
          <div class="row justify-content-center">
            <div class="col-md-6 col-12">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <div class="row gap-5">
                      <div class="col-md-4 col-4">
                        <button class="nav-link nav_link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ავტორიზაცია</button>
                    </div>
                    <div class="col-md-4 col-4">
                        <button class="nav-link nav_link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">რეგისტრაცია</button>
                    </div> 
                    </div>                            
                </div>
              </nav>
            </div>
          </div>
              <div class="tab-content mt-5" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form action="" class=" w-100">
                      <label for="email" class="contact-label">ელ.ფოსტა</label>
                      <input type="email" id="email" class="contact-input w-100 " placeholder="Example@mail.com">
                      <label for="password" class="contact-label mt-4">პაროლი</label>
                      <input type="password" id="password" class="contact-input w-100" placeholder="***********">
                      <input type="submit" class="btn btn-input w-100 mt-5" value="ავტორიზაცია" name="" id="">
                  </form>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <form action="" class=" w-100">
                    <div class="row d-md-flex d-none">
                      <div class="col-md-6">
                        <label for="text" class="contact-label">სახელი</label>
                        <input type="text" id="userName" class="contact-input w-100 " placeholder="">
                      </div>
                      <div class="col-md-6">
                        <label for="text" class="contact-label">გვარი</label>
                        <input type="text" id="userSrnm" class="contact-input w-100 " placeholder="">
                      </div>
                    </div>
                    <div class="row d-md-none  justify-content-center">
                      <div class="col-md-6">
                        <label for="text" class="contact-label">სახელი</label>
                        <input type="text" id="userName" class="contact-input w-100 " placeholder="">
                      </div>
                      <div class="col-md-6">
                        <label for="text" class="contact-label mt-4">გვარი</label>
                        <input type="text" id="userSrnm" class="contact-input w-100 " placeholder="">
                      </div>
                    </div>
                      <label for="number" class="contact-label mt-4">ტელეფონის ნოემრი</label>
                      <input type="number" id="usertel" class="contact-input w-100 " placeholder="5*********">
                      <label for="email" class="contact-label mt-4">ელ.ფოსტა</label>
                      <input type="email" id="email" class="contact-input w-100 " placeholder="Example@mail.com">
                      <label for="password" class="contact-label mt-4">პაროლი</label>
                      <input type="password" id="password" class="contact-input w-100" placeholder="***********">
                      <input type="submit" class="btn btn-input w-100 mt-5" value="რეგისტრაცია" name="" id="">
                  </form>
                </div>
                
              </div>
        </div>
      </div>
    </div>    

  <!-- <FooterView/> -->
</div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/NavbarView.vue';
import FooterView from '../../components/FooterView.vue'



export default {
  name: 'HomeView',
  components: {
    NavbarView,
    FooterView,
  } 
}
</script>
