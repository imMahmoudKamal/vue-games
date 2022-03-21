<template>
  <ArticleCompSkeleton v-if="props.isLoading" />

  <article class="article" v-else>
    <header class="article__header">
      <div class="article__header__img">
        <img :src="props.game.cover_img_url" :alt="props.game.title" />
      </div>

      <div class="article__header__info">
        <div class="article__header__info__title">
          <h1>{{ props.game.title }}</h1>
          <span>{{ props.game.os }}</span>
        </div>

        <div class="article__header__info__meta">
          <span>{{ props.game.developer }}</span>
          <span>{{ props.game.downloads }}</span>
        </div>
      </div>
    </header>

    <div class="article__content">
      <div
        class="article__content__container"
        :class="{ 'article__content__container--active': isMoreActive }"
        ref="contentContainer"
        v-html="props.game.description"
      />

      <button class="article__more" @click="seeMore" v-if="!isMoreActive">
        Read More
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  game: { type: Object },
  isLoading: { type: Boolean },
});

import { ref, watch } from 'vue';
import ArticleCompSkeleton from './ArticleCompSkeleton.vue';

const isMoreActive = ref(false);
const contentContainer = ref(null);

function seeMore() {
  isMoreActive.value = true;
  contentContainer.value.style.cssText = `max-height: ${contentContainer.value.scrollHeight}px`;
}

watch(
  () => props.game,
  (currentValue, newValue) => {
    if (currentValue !== newValue) {
      isMoreActive.value = false;
    }
  }
);
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 10px rgb(0 0 0 / 7%));

  &__header {
    &__img {
      position: relative;
      padding-top: 35%;
      min-height: 10rem;
      margin-bottom: 1rem;

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
        object-fit: cover;
      }
    }

    &__info {
      padding: 1rem 1rem 0;
      background-color: #fff;
      border-radius: 0.25rem 0.25rem 0 0;

      &__title {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: var(--clr-neutral-600);

        h1 {
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        span {
          opacity: 60%;
          font-size: 0.6rem;
          white-space: nowrap;
          margin-top: 0.25rem;
        }
      }

      &__meta {
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
        color: var(--clr-neutral-600);

        span:last-child {
          opacity: 70%;
          font-weight: 500;
        }
      }
    }
  }

  &__content {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0 0 0.25rem 0.25rem;
    font-size: 0.7rem;
    line-height: 1.6;
    color: var(--clr-neutral-600);

    p {
      margin: 0.5rem 0;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &__container {
      position: relative;
      overflow: hidden;
      max-height: 8rem;
      transition: 200ms max-height linear;

      &::after {
        content: '';
        position: absolute;
        inset: auto 0 0;
        height: 3rem;
        background: linear-gradient(0deg, #fff, transparent);
        z-index: 1;
      }

      &--active::after {
        content: unset;
      }
    }
  }

  &__more {
    color: var(--clr-primary);
    font-size: 0.6rem;
    font-weight: 500;
  }
}
</style>
