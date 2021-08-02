<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo Here</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <!-- replacing the ul with a div tag -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">   -->
    <div class="navbar-nav mr-auto">
    <!-- on each of the li tag , there is a class named *nav item*, copy it and place it on the a tag & delete the li -->
          <!-- <a class=" nav-item nav-link active" aria-current="page" href="#">Home</a> -->
          <!-- replace the a tag with the router link -->
              <router-link to="/" class="nav-item nav-link">Home</router-link> 
              <router-link to="/About" class="nav-item nav-link">About</router-link> 
              <router-link to="/Careers" class="nav-link">Careers</router-link>
              <router-link to="/Contact" class="nav-link">Contact</router-link> 			
        </div>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
</nav>
 </div>
  <router-view/>
</template>

<style>
 #nav{
background: whitesmoke;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>