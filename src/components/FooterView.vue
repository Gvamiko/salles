<template>
    <div>
        <div class="container-fluid mt-5">
           <footer>
                <div class="container mt-5">
                    <div class="row justify-content-between mt-5">
                        <div class="col-md-4">
                            <div class="il">
                                <li><a href=""></a></li>
                            </div>
                        </div>
                        <div class="col-md-4 mt-5">
                            <div class="info-group">
                                    <h6 class="contact-h m-0 p-0">მოგვწერეთ ელექტრონულ ფოსტაზე</h6>
                                </div>
                                <form action="" class="d-flex gap-3  contact-form align-items-center d-md-flex d-none">
                                    <label for="email" class="contact-label">ელ.ფოსტა</label>
                                    <input type="email" id="email" class="contact-input" placeholder="Example@mail.com">
                                    <input type="submit" class="btn btn-input-login" value="გაზავნა" name="" id="">
                                </form>
                                <form action="" class="d-md-none d-block w-100">
                                    <input type="email" id="email" class="contact-input w-100 mt-3" placeholder="Example@mail.com">
                                    <input type="submit" class="btn btn-input-login w-100 mt-3" value="გაზავნა" name="" id="">
                                </form>
                        </div>
                        <div class="col-md-4">
                            <div class="il">
                                <li><a href=""></a></li>
                            </div>
                        </div>
                    </div>
                </div>
           </footer>     
        </div>
    </div>
  </template>


<script>
   export default {
        name: "footer",
    }

</script>