<template>

<q-layout view="lHh Lpr lFf">

    <AppNavbar/>

    <q-page-container>

        <router-view/>

    </q-page-container>

</q-layout>

</template>

<script setup>

import AppNavbar from '@/components/layout/AppNavbar.vue'

</script>