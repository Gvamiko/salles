<template>
    <div>
        <div class="container">
            <div class="row justify-content-center align-items-center mt-3 mb-5 bgr">
                <div class="col-md-12 col-12 ">
                    <div class="col-md-12">
                        <h4 class="text-center headers mb-4">კონტაქტი</h4>
                    </div>
                    <div>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-6 col-12 d-flex justify-content-center">
                                <div class="info-group">
                                    <h6 class="contact-h m-0 p-0">მოგვწერეთ ელექტრონულ ფოსტაზე</h6>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 d-flex align-items-center justify-content-center ">
                                <form action="" class="d-flex gap-3  contact-form align-items-center d-md-flex d-none">
                                    <label for="email" class="contact-label">ელ.ფოსტა</label>
                                    <input type="email" id="email" class="contact-input" placeholder="Example@mail.com">
                                    <input type="submit" class="btn btn-input" value="გაზავნა" name="" id="">
                                </form>
                                <form action="" class="d-md-none d-block w-100">
                                    <input type="email" id="email" class="contact-input w-100 mt-3" placeholder="Example@mail.com">
                                    <input type="submit" class="btn btn-input w-100 mt-3" value="გაზავნა" name="" id="">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>


<script>
   export default {
        name: "contact",
    }

</script>