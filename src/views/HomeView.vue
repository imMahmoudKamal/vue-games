<template>
  <Nav @selectCategory="getFeaturedGame" />

  <main class="main-content">
    <FeaturedGame :category="category" />
    <SimilarGames sectionTitle="Most Recommendation" />
    <SimilarGames sectionTitle="Most Popular" />
  </main>
</template>

<script setup>
import Nav from '../components/NavComp.vue';
import FeaturedGame from '../components/FeaturedGame.vue';
import SimilarGames from '../components/SimilarGames.vue';
import { ref } from '@vue/reactivity';

const category = ref('All');

function getFeaturedGame(cat) {
  category.value = cat;
}
</script>
