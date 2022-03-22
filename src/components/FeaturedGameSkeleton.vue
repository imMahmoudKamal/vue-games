<template>
  <div class="game">
    <div class="game__img">
      <div></div>
    </div>

    <div class="game__info">
      <div class="game__info__title"></div>
      <div class="game__info__body1"></div>
      <div class="game__info__body2"></div>
      <div class="game__info__cta"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game {
  display: flex;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);
  height: 11rem;

  &__img {
    width: 70%;
    padding: 1rem;

    div {
      height: 100%;
      border-radius: 0.3rem;
      background-color: #e0e0e0;
      animation: shimmer 1s infinite;
    }
  }

  &__info {
    width: 30%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;

    &__title,
    &__cta,
    &__body1,
    &__body2 {
      background-color: #e0e0e0;
      animation: shimmer 1s infinite;
    }

    &__title {
      height: 1rem;
      background-color: red;
    }

    &__body1 {
      margin-top: 1rem;
      height: 0.4rem;
    }

    &__body2 {
      margin-top: 0.2rem;
      height: 0.4rem;
      width: 70%;
    }

    &__cta {
      height: 1rem;
      margin-top: auto;
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
      padding: 0 1rem 1rem;

      &__cta {
        grid-column: 1 / 2;
        grid-row: 2/ 3;
      }
    }
  }
}
</style>
