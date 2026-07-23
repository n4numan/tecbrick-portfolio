<template>
  <section class="hero">
    <div class="container hero-content">

      <!-- Left Side -->
      <div class="hero-text">

        <span class="hello">
          👋 Hello, I'm
        </span>

        <h1>{{ portfolio.name }}</h1>

        <h4>{{ portfolio.title }}</h4>

        <!-- Tech Stack -->
        <div class="tech-stack">

          <q-chip
            v-for="tech in portfolio.technologies"
            :key="tech"
            color="primary"
            text-color="white"
          >
            {{ tech }}
          </q-chip>

        </div>

        <p>
          {{ portfolio.description }}
        </p>

        <!-- Buttons -->
        <div class="hero-buttons">

          <q-btn
            color="primary"
            unelevated
            rounded
            icon="mail"
            label="Contact Me"
            :href="portfolio.buttons.contact"
          />

          <q-btn
            outline
            color="primary"
            rounded
            icon="download"
            label="Download Resume"
            :href="portfolio.buttons.resume"
            target="_blank"
          />

        </div>

        <!-- Social Icons -->
      <div class="social-links">

        <q-btn
            flat
            no-caps
            icon="code"
            label="GitHub"
            color="grey-8"
            :href="portfolio.social.github"
            target="_blank"
        >
            <q-tooltip>GitHub</q-tooltip>
        </q-btn>

        <q-btn
            flat
            no-caps
            icon="business"
            label="LinkedIn"
            color="primary"
            :href="portfolio.social.linkedin"
            target="_blank"
        >
            <q-tooltip>LinkedIn</q-tooltip>
        </q-btn>

        <q-btn
            flat
            no-caps
            icon="mail"
            label="Email"
            color="red"
            :href="portfolio.social.email"
        >
            <q-tooltip>Email</q-tooltip>
        </q-btn>

        </div>

      </div>

      <!-- Right Side -->

      <div class="hero-image">

        <q-avatar
          size="340px"
          class="profile-avatar"
        >

          <img
            :src="portfolio.profileImage"
            :alt="portfolio.name"
          />

        </q-avatar>

      </div>

    </div>
  </section>
</template>

<script setup>
import portfolio from '@/data/portfolio.js'
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

  font-weight:400;

}

// h1{

//   font-size:65px;
//   font-weight:900;
//   color:#0F172A;
//   line-height:1.1;
//   margin:15px 0;
// }


// h2{

//   font-size:30px;
//   color:#64748B;
//   margin-bottom:px;
//   font-weight:600;
// }
// .tech-stack{
//   display:flex;
//   flex-wrap:wrap;
//   gap:12px;
//   margin-bottom:35px;
// }

// p{

//   font-size:19px;
//   line-height:1.9;
//   color:#475569;
//   max-width:600px;
// }

// .hero-buttons{
//   display:flex;
//   gap:20px;
//   margin-top:45px;
// }
h1 {
  font-size: 65px;
  font-weight: 900;
  color: #0F172A;
  line-height: 1.1;
  margin: 12px 0 10px;
}

h4 {
  font-size: 30px;
  font-weight: 600;
  color: #64748B;
  margin: 0 0 18px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

// h1{
//   font-size:65px;
//   font-weight:900;
//   color:#0F172A;
//   line-height:1.1;
//   margin:8px 4px 6px;
// }
// h4{
//   font-size:30px;
//   font-weight:600;
//   color:#64748B;
//   margin:0 0 12px;
// }
// .tech-stack{
//   display:flex;
//   flex-wrap:wrap;
//   gap:8px;
//   margin-bottom:18px;
// }


// .tech-stack .q-chip{
//   border-radius:30px;
//   font-weight:500;
//   padding:3px 6px;
//   transition:.3s;
// }

.tech-stack .q-chip:hover{

  transform:translateY(-3px);

}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #475569;
  max-width: 600px;
  margin: 0;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}



// p{
//   font-size:18px;
//   line-height:1.7;
//   color:#475569;
//   max-width:600px;
//   margin:2px;
// }

// .hero-buttons{
//   display:flex;
//   gap:16px;
//   margin-top:24px;
// }

// .hero-buttons .q-btn{
//   padding:10px 18px;
//   font-weight:600;
// }

// .social-links{
//   display:flex;
//   gap:15px;
//   margin-top:35px;
// }

.social-links{
  display:flex;
  gap:16px;
  margin-top:24px;
  flex-wrap:wrap;
}

.social-links .q-btn{
  border-radius:12px;
  padding:8px 16px;
  font-weight:600;
  background:#fff;
  box-shadow:0 8px 20px rgba(0,0,0,.08);
  transition:.3s;
}

.social-links .q-btn:hover{
  transform:translateY(-3px);
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