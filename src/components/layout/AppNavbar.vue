<!-- AppNavbar.vue -->
<template>
  <q-header class="navbar" reveal>

    <q-toolbar class="container toolbar">

      <!-- Logo -->

      <router-link to="/" class="logo">
        Tec<span>Brick</span>
      </router-link>

      <!-- Navigation -->

      <div class="nav-links">

        <router-link to="/">Home</router-link>

        <router-link to="/about">About</router-link>

        <router-link to="/services">Services</router-link>

        <router-link to="/projects">Projects</router-link>

        <router-link to="/resume">Resume</router-link>

        <router-link to="/blog">Blog</router-link>

        <router-link to="/ai-tools">AI Tools</router-link>

        <router-link to="/contact">Contact</router-link>

      </div>

      <!-- Right Button -->

      <q-btn
        color="primary"
        unelevated
        rounded
        label="Hire Me"
      />

    </q-toolbar>

  </q-header>
</template>

<script setup>
</script>

<style scoped lang="scss">

.navbar{

background:rgba(255,255,255,.88);

backdrop-filter:blur(12px);

box-shadow:0 5px 25px rgba(0,0,0,.06);

}

.toolbar{

height:80px;

display:flex;

align-items:center;

justify-content:space-between;

}

.logo{

font-size:30px;

font-weight:800;

text-decoration:none;

color:#111827;

}

.logo span{

color:#2563EB;

}

.nav-links{

display:flex;

gap:35px;

}

.nav-links a{

text-decoration:none;

font-weight:600;

color:#475569;

transition:.3s;

position:relative;

}

.nav-links a:hover{

color:#2563EB;

}

.router-link-active{

color:#2563EB !important;

}

.router-link-active::after{

content:"";

position:absolute;

left:0;

bottom:-8px;

width:100%;

height:3px;

background:#2563EB;

border-radius:10px;

}

@media(max-width:992px){

.nav-links{

display:none;

}

}

</style>