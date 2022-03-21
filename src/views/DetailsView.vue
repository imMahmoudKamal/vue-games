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
const { data, isLoading } = useFetch(`games/${formatUrl() - 1}`);
game.value = data;
loading.value = isLoading;

watch(
  () => props.id,
  (currentValue, newValue) => {
    if (currentValue !== newValue) {
      const { data, isLoading } = useFetch(`games/${formatUrl() - 1}`);
      game.value = data;
      loading.value = isLoading;
    }
  }
);

function formatUrl() {
  return props.id.match(/[0-9]{1,}$/)[0];
}
</script>
