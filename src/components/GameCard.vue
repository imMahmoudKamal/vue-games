<template>
  <div class="card">
    <div class="card__img">
      <router-link
        :to="{
          path: `/details/${formatUrl(props.game.title)}-${props.game.id}`,
        }"
      >
        <img :src="game.img_url" :alt="props.game.title" />
        <span class="card__img__rating">
          <svg width="10" height="9.5" viewBox="0 0 10 9.5">
            <path
              d="M5,7.635,8.09,9.5,7.27,5.985,10,3.62l-3.595-.3L5,0,3.6,3.315,0,3.62,2.73,5.985,1.91,9.5Z"
            />
          </svg>
          {{ props.game.rating.toFixed(1) }}
        </span>
      </router-link>
    </div>

    <h3 class="card__title">{{ props.game.title }}</h3>
    <router-link
      class="card__cta"
      :to="{
        path: `/details/${formatUrl(props.game.title)}-${props.game.id}`,
      }"
    >
      {{ props.os ? 'Get Now' : 'MORE INFO' }}
    </router-link>
    <span class="card__os" v-if="props.os">For Android only</span>
  </div>
</template>

<script setup>
const props = defineProps({
  os: { type: Boolean, default: false },
  game: { type: Object },
  id: { type: Number },
});

function formatUrl(url) {
  return url.toLowerCase().split(' ').join('_');
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;

  &__img {
    border-radius: 0.6rem;
    overflow: hidden;
    position: relative;
    padding-top: 100%;

    a {
      display: block;
      position: absolute;
      inset: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__rating {
      position: absolute;
      z-index: 1;
      left: 0.5rem;
      top: 0.5rem;
      background-color: #fff;
      font-size: 0.6rem;
      line-height: 1;
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      fill: var(--clr-primary);
      color: var(--clr-neutral-800);
      font-weight: bold;
    }
  }

  &__title {
    font-size: 0.75rem;
    color: var(--clr-neutral-800);
    text-transform: capitalize;
    height: 2rem;
    overflow: hidden;
  }

  &__cta {
    background-color: var(--clr-primary);
    font-size: 0.7rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    border-radius: 0.2rem;
    line-height: 1;
    padding: 0.4rem 0;
    margin-top: auto;
  }

  &__os {
    font-size: 0.6rem;
    text-align: center;
    color: var(--clr-neutral-600);
    opacity: 70%;
  }
}
</style>
