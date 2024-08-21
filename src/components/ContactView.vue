<template>
    <div>
        <div class="container">
            <div class="row justify-content-center mt-3 bgr">
                <div class="col-md-12 col-12 ">
                    <div class="col-md-12">
                        <h4 class="text-center headers mb-4">კონტაქტი</h4>
                    </div>
                    <div>
                        <div class="row w-100 h-100 justify-content-center ">
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <div class="info-group">
                                    <h6>მოგვწერეთ ელექტრონულ ფოსტაზე</h6>
                                    <h6>ან დაგვიკავშირდით ნომერზე Tel:*********</h6>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-center justify-content-center">
                                <form action="" class="d-flex gap-3 contact-form align-items-center">
                                    <label for="email" class="contact-label">ელ.ფოსტა</label>
                                    <input type="email" id="email" class="contact-input" placeholder="Example@mail.com">
                                    <input type="submit" class="btn btn-input" value="გაზავნა" name="" id="">
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