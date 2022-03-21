<template>
  <div class="article__header">
    <div class="article__header__img"></div>
  </div>
  <div class="article__content">
    <div class="article__content__title"></div>
    <div class="article__content__body1"></div>
    <div class="article__content__body2"></div>
    <div class="article__content__body3"></div>
    <div class="article__content__btn"></div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  &__header,
  &__content {
    background-color: #fff;
    border-radius: 0.3rem;
  }

  &__header {
    padding-top: 35%;
    min-height: 10rem;
    position: relative;

    &__img {
      background-color: #e0e0e0;
      animation: shimmer 1s infinite;
      position: absolute;
      inset: 1rem;
      border-radius: 0.25rem;
    }
  }

  &__content {
    height: 15rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    &__title,
    &__body1,
    &__body2,
    &__body3,
    &__btn {
      background-color: #e0e0e0;
      animation: shimmer 1s infinite;
    }

    &__title {
      height: 1rem;
      width: 7rem;
    }

    &__body1,
    &__body2,
    &__body3 {
      height: 0.6rem;
      margin-top: 0.4rem;
      width: 12rem;
    }

    &__body1 {
      margin-top: 2rem;
      width: 18rem;
    }

    &__btn {
      margin-top: auto;
      height: 0.75rem;
      width: 5rem;
    }
  }
}
</style>
