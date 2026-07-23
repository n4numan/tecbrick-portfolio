<template>
  <section class="skills">

    <div class="container">

      <div class="section-header">

        <span class="subtitle">
          MY EXPERTISE
        </span>

        <h2>
          Skills & Technologies
        </h2>

        <p>
          Technologies I use to build scalable web applications and AI solutions.
        </p>

      </div>

      <div class="skills-grid">

        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
        >

          <q-icon
            :name="skill.icon"
            size="48px"
            color="primary"
          />

          <h4>{{ skill.name }}</h4>

          <span>{{ skill.level }}</span>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>

const skills = [

{
name:"Python",
icon:"code",
level:"Advanced"
},

{
name:"FastAPI",
icon:"api",
level:"Advanced"
},

{
name:"Django",
icon:"web",
level:"Advanced"
},

{
name:"Vue.js",
icon:"dashboard",
level:"Intermediate"
},

{
name:"Quasar",
icon:"bolt",
level:"Intermediate"
},

{
name:"SQL",
icon:"storage",
level:"Advanced"
},

{
name:"Git",
icon:"source",
level:"Advanced"
},

{
name:"AI",
icon:"smart_toy",
level:"Learning"
}

]

</script>

<style scoped>

.skills{

/* padding:100px 0; */
padding:80px 0;

background:white;

}

.section-header{

text-align:center;

margin-bottom:70px;

}

.subtitle{

color:#2563EB;

font-weight:700;

letter-spacing:2px;

}

.section-header h2{

font-size:42px;

margin:15px 0;

font-weight:800;

}

.section-header p{

max-width:650px;

margin:auto;

color:#64748B;

font-size:18px;

}

.skills-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:20px;

}

.skill-card{

padding:35px;

background:#F8FAFC;

border-radius:20px;

text-align:center;

transition:.35s;

border:1px solid #E2E8F0;

}

.skill-card:hover{

transform:translateY(-10px);

box-shadow:0 20px 40px rgba(37,99,235,.15);

}

.skill-card h4{

margin-top:20px;

font-size:22px;

font-weight:700;

}

.skill-card span{

color:#64748B;

}

</style>