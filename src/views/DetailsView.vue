<template>
  <main class="main-content">
    <ArticleComp :game="game.value" :isLoading="loading.value" />
    <SimilarGames sectionTitle="Most Recommendation" :details="true" />
  </main>
</template>

<script setup>
const props = defineProps({
  id: { type: String },
});

import { ref, watch } from 'vue';
import { useFetch } from '../composables/useFetch';
import SimilarGames from '../components/SimilarGames.vue';
import ArticleComp from '../components/ArticleComp.vue';

// fetch data
const game = ref(null);
const loading = ref(null);
const { data, isLoading } = useFetch(`games/${props.id}`);
game.value = data;
loading.value = isLoading;

watch(
  () => props.id,
  (currentValue, newValue) => {
    if (currentValue !== newValue) {
      const { data, isLoading } = useFetch(`games/${props.id}`);
      game.value = data;
      loading.value = isLoading;
    }
  }
);

/*
<p>
  DASH as fast as you can! <br />
  DODGE the oncoming trains!
</p>
<p>
  Help Jake, Tricky & Fresh escape from the grumpy Inspector and his
  dog.
</p>

<ul>
  <li>★ Grind trains with your cool crew!</li>
  <li>★ Colorful and vivid HD graphics!</li>
  <li>★ Hoverboard Surfing!</li>
  <li>★ Paint powered jetpack!</li>
  <li>★ Lightning fast swipe acrobatics!</li>
  <li>★ Challenge and help your friends!</li>
</ul>

<p>
  Join the most daring chase! A Universal App with HD optimized
  graphics. By Kiloo and Sybo.
</p>
*/
</script>
