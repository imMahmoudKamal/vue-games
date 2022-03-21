<script setup>
import Nav from '../components/NavComp.vue';
import FeaturedGame from '../components/FeaturedGame.vue';
import SimilarGames from '../components/SimilarGames.vue';
</script>

<template>
  <Nav />

  <main class="main-content">
    <FeaturedGame />
    <SimilarGames sectionTitle="Most Recommendation" />
    <SimilarGames sectionTitle="Most Popular" />
  </main>
</template>
