<template>
    <div>   
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-custom">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Only Sales</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">მთავარი</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">პარტნიორები</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ჩვენს შესახებ</a>
                </li>
            </ul>
                <button class="btn btn-manual-nav" type="submit">ავტორიზაცია</button>
            </div>
        </div>
        </nav>

    </div>
  </template>


<script>
   export default {
        name: "navbar",
    }

</script>