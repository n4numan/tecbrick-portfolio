<template>
  <section class="about">

    <div class="container about-content">

      <!-- Left Side -->

      <div class="about-image">

        <q-avatar
          size="380px"
          class="profile-avatar"
        >
          <img
            :src="profileImage"
            alt="Numan Khan"
          />
        </q-avatar>

      </div>

      <!-- Right Side -->

      <div class="about-text">

        <span class="subtitle">
          ABOUT ME
        </span>

        <h2>
          Passionate Full Stack Developer
        </h2>

        <p>
          I'm <strong>Numan Khan</strong>, a Full Stack Developer
          specializing in Python, FastAPI, Django, Vue.js, and Quasar.
          I enjoy building modern, scalable, and user-friendly web applications.
        </p>

        <p>
          My goal is to create high-quality software that solves
          real-world problems while continuously learning new technologies,
          especially in AI and backend development.
        </p>

        <!-- Information -->

        <div class="info-grid">

          <div class="info-card">
            <q-icon name="school" color="primary" size="32px"/>
            <h4>Education</h4>
            <p>BS Computer Science</p>
          </div>

          <div class="info-card">
            <q-icon name="work" color="primary" size="32px"/>
            <h4>Experience</h4>
            <p>Python Full Stack</p>
          </div>

          <div class="info-card">
            <q-icon name="location_on" color="primary" size="32px"/>
            <h4>Location</h4>
            <p>Lahore, Pakistan</p>
          </div>

          <div class="info-card">
            <q-icon name="code" color="primary" size="32px"/>
            <h4>Tech Stack</h4>
            <p>10+ Technologies</p>
          </div>

        </div>

        <q-btn
          color="primary"
          rounded
          unelevated
          icon="download"
          label="Download Resume"
          class="resume-btn"
        />

      </div>

    </div>
  </section>
</template>

<script setup>
import profileImage from '@/assets/images/profile.jpg'
</script>

<style scoped lang="scss">

.about{
//   padding:120px 0;
  padding:80px 0;
  background:white;
}

.about-content{
  display:flex;
  align-items:center;
//   gap:80px;
  gap:50px;
}

.about-image{
  flex:1;
  display:flex;
  justify-content:center;
}

.profile-avatar{
  border:8px solid white;
  box-shadow:0 20px 60px rgba(37,99,235,.18);
}

.about-text{
  flex:1;
}

.subtitle{
  color:#2563EB;
  font-weight:700;
  letter-spacing:2px;
}

h2{
  font-size:46px;
  margin:15px 0 30px;
  color:#0F172A;
  font-weight:800;
}

.about-text p{
  color:#64748B;
  line-height:1.9;
  font-size:17px;
  margin-bottom:20px;
}

.info-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
  margin:40px 0;
}

.info-card{
  background:#F8FAFC;
  padding:25px;
  border-radius:18px;
  transition:.3s;
  border:1px solid #E2E8F0;
}

.info-card:hover{
  transform:translateY(-6px);
  box-shadow:0 15px 35px rgba(37,99,235,.12);
}

.info-card h4{
  margin:15px 0 8px;
  font-size:20px;
  font-weight:700;
}

.info-card p{
  margin:0;
}

.resume-btn{
  margin-top:10px;
}

@media(max-width:900px){

.about-content{
  flex-direction:column;
  text-align:center;
}

.info-grid{
  grid-template-columns:1fr;
}

.profile-avatar{
  width:300px !important;
  height:300px !important;
}

}

</style>