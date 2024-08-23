<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-custom" id="navbar-example2">
        <div class="container">
            <a href="/" class="navbar-brand">ByteCraft</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./#scrollspyHeading1">პროდუქტები</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/#scrollspyHeading2">პარტნიორები</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/#scrollspyHeading3">ჩვენს შესახებ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/#scrollspyHeading4">კონტაქტი</a>
                </li>
            </ul>
                <RouterLink to="/login">
                    <button class="btn btn-manual-nav" type="submit">ავტორიზაცია</button>
                </RouterLink>
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