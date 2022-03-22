<template>
  <FeaturedGameSeleton v-if="isLoading" />

  <section class="game" v-else>
    <div class="game__img">
      <img
        :src="filterData(data).cover_img_url"
        :alt="filterData(data).title"
      />
    </div>

    <div class="game__info">
      <h1 class="game__info__title">{{ filterData(data).title }}</h1>
      <span class="game__info__comp">{{ filterData(data).developer }}</span>
      <p class="game__info__desc" v-html="filterData(data).description"></p>
      <router-link
        class="game__info__cta"
        :to="{
          path: `/details/${formatUrl(filterData(data).title)}-${
            filterData(data).id
          }`,
        }"
      >
        MORE INFO
      </router-link>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  category: { type: String },
});

import FeaturedGameSeleton from './FeaturedGameSkeleton.vue';
import { useFetch } from '../composables/useFetch';
const { data, isLoading } = useFetch('games');

function filterData(data) {
  return data.filter((game) => game.category === props.category)[0] || data[0];
}

function formatUrl(url) {
  return url.toLowerCase().split(' ').join('_');
}
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);
  height: 11rem;

  &__img {
    width: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    width: 30%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;

    &__title {
      font-size: 0.95rem;
      color: var(--clr-neutral-800);
      font-weight: 700;
      text-transform: capitalize;
    }

    &__comp,
    &__desc {
      color: var(--clr-neutral-600);
      color: var(--clr-neutral-600);
      font-size: 0.7rem;
    }

    &__desc {
      line-height: 1.2;
      height: calc(3 * 0.8rem);
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: auto;
    }

    &__cta {
      background-color: var(--clr-primary);
      color: #fff;
      line-height: 1;
      text-align: center;
      padding: 0.4rem 0;
      border-radius: 0.25rem;
      font-weight: 500;
      font-size: 0.7rem;
      margin-top: auto;
    }
  }

  @media (max-width: 48rem) {
    &__info {
      padding: 1rem;
    }
  }

  @media (max-width: 36rem) {
    flex-direction: column;
    height: auto;

    &__img {
      width: 100%;
      height: 10rem;
    }

    &__info {
      width: 100%;
      display: grid;
      column-gap: 1rem;
      row-gap: 0.2rem;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      &__title,
      &__comp,
      &__cta {
        grid-column: 1 / 2;
      }

      &__desc {
        grid-column: 2 /3;
        grid-row: 1 / 4;
        height: 4rem;
        line-height: 1.15;
      }
    }
  }
}
</style>
