<template>
  <SimilarGamesSkeleton v-if="isLoading" />

  <section class="similar" v-else>
    <header class="similar__top">
      <h2 class="similar__top__heading">{{ sectionTitle }}</h2>
      <button class="similar__top__btn">SEE ALL</button>
    </header>

    <ul class="similar__list" :class="{ 'similar__list--loading': isLoading }">
      <li v-for="(game, index) in data" :key="index">
        <GameCard :os="details" :game="game" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  sectionTitle: { type: String, required: true, default: 'SECTION TITLE' },
  details: { type: Boolean, default: false },
});

import { useFetch } from '../composables/useFetch';
import GameCard from './GameCard.vue';
import SimilarGamesSkeleton from './SimilarGamesSkeleton.vue';

const link =
  props.sectionTitle === 'Most Recommendation' ? 'recommended' : 'popular';

const { data, isLoading } = useFetch(link);
</script>

<style lang="scss" scoped>
.similar {
  padding: 1rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);
  border-radius: 0.25rem;
  background-color: #fff;

  &__top {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 0.85rem;
    margin-bottom: 1rem;

    &__heading {
      color: var(--clr-neutral-800);
      font-size: 0.85rem;
      font-weight: 500;
    }

    &__btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--clr-primary);
      font-size: 0.8rem;

      &::after {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: rotate(-45deg);
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  @media (max-width: 48rem) {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 36rem) {
    &__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
