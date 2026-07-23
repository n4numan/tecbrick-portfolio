<!-- HeroSection.vue -->
<template>
  <section class="hero">
    <div class="container hero-content">

      <!-- Left Side -->
      <div class="hero-text">

        <span class="hello">
          👋 Hello, I'm
        </span>

        <h1>Numan Khan</h1>

        <h2>Full Stack Developer</h2>

        <!-- Tech Stack -->
        <div class="tech-stack">

          <q-chip color="primary" text-color="white">
            Python
          </q-chip>

          <q-chip color="primary" text-color="white">
            FastAPI
          </q-chip>

          <q-chip color="primary" text-color="white">
            Django
          </q-chip>

          <q-chip color="primary" text-color="white">
            Vue.js
          </q-chip>

          <q-chip color="primary" text-color="white">
            Quasar Framework
          </q-chip>

          <q-chip color="primary" text-color="white">
            Python AI
          </q-chip>

        </div>

        <p>
          I specialize in building scalable web applications,
          REST APIs, and AI-powered solutions using Python,
          FastAPI, Django, Vue.js, and Quasar.
        </p>

        <!-- Buttons -->

        <div class="hero-buttons">

          <q-btn
            color="primary"
            unelevated
            rounded
            label="Hire Me"
            icon="work"
          />

          <q-btn
            outline
            color="primary"
            rounded
            label="Download Resume"
            icon="download"
          />

        </div>

        <!-- Social Icons -->

        <div class="social-links">

          <q-btn
            flat
            round
            icon="code"
            color="grey-8"
          />

          <q-btn
            flat
            round
            icon="business"
            color="grey-8"
          />

          <q-btn
            flat
            round
            icon="mail"
            color="grey-8"
          />

        </div>

      </div>

      <!-- Right Side -->

      <div class="hero-image">

        <q-avatar
          size="340px"
          class="profile-avatar"
        >
          <img
            :src="profileImage"
            alt="Numan Khan"
          />
        </q-avatar>

      </div>

    </div>
  </section>
</template>

<script setup>
import profileImage from '@/assets/images/profile.jpg'
// import portfolioData from '@/data/portfolio.js'
</script>

<style scoped lang="scss">

.hero{
//   min-height: calc(100vh - 90px);
//   padding:40px 0 80px;
  min-height: 70vh;
  padding: 30px 0 50px;
  display:flex;
  align-items:center;


  background:linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fbff 50%,
      #eef6ff 100%
  );

  position:relative;
  overflow:hidden;
}

/* Decorative Circle */

.hero::before{
  content:'';
  position:absolute;

  width:500px;
  height:500px;

  border-radius:50%;

  background:rgba(37,99,235,.05);

  top:-180px;
  right:-180px;
}

.hero-content{

  display:flex;
  justify-content:space-between;
  align-items:center;

  gap:90px;

  position:relative;
  z-index:2;

}

.hero-text{

  flex:1;

}

.hero-image{

  flex:1;

  display:flex;

  justify-content:center;

  align-items:flex-start;

}

.hello{

  font-size:20px;

  color:#2563EB;

  font-weight:600;

}

h1{

  font-size:72px;

  font-weight:900;

  color:#0F172A;

  line-height:1.1;

  margin:15px 0;

}

h2{

  font-size:34px;

  color:#64748B;

  margin-bottom:30px;

  font-weight:700;

}

.tech-stack{

  display:flex;

  flex-wrap:wrap;

  gap:12px;

  margin-bottom:35px;

}

.tech-stack .q-chip{

  border-radius:30px;

  font-weight:600;

  padding:4px 8px;

  transition:.3s;

}

.tech-stack .q-chip:hover{

  transform:translateY(-3px);

}

p{

  font-size:19px;

  line-height:1.9;

  color:#475569;

  max-width:600px;

}

.hero-buttons{

  display:flex;

  gap:20px;

  margin-top:45px;

}

.hero-buttons .q-btn{

  padding:10px 18px;

  font-weight:600;

}

.social-links{

  display:flex;

  gap:15px;

  margin-top:35px;

}

.social-links .q-btn{

  width:48px;

  height:48px;

  border-radius:50%;

  background:white;

  box-shadow:0 10px 30px rgba(0,0,0,.08);

  transition:.3s;

}

.social-links .q-btn:hover{

  transform:translateY(-5px);

}

.profile-avatar{

  width:400px !important;

  height:400px !important;

  border:10px solid white;

  box-shadow:0 30px 70px rgba(37,99,235,.25);

  transition:.35s;

  margin-top:-20px;

}

.profile-avatar img{

  object-fit:cover;

}

.profile-avatar:hover{

  transform:translateY(-8px) scale(1.03);

  box-shadow:0 45px 90px rgba(37,99,235,.35);

}

@media(max-width:1100px){

.hero-content{

gap:60px;

}

h1{

font-size:60px;

}

}

@media(max-width:900px){

.hero{

padding:80px 0;

min-height:auto;

}

.hero-content{

flex-direction:column-reverse;

text-align:center;

gap:40px;

}

.hero-buttons{

justify-content:center;

flex-wrap:wrap;

}

.tech-stack{

justify-content:center;

}

.social-links{

justify-content:center;

}

.profile-avatar{

width:300px !important;

height:300px !important;

margin-top:0;

}

h1{

font-size:48px;

}

h2{

font-size:28px;

}

p{

margin:auto;

}

}

</style>