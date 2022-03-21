<template>
  <div class="similar">
    <div class="similar__top">
      <div class="similar__top__heading"></div>
      <div class="similar__top__btn"></div>
    </div>

    <div class="similar__list">
      <div class="similar__list__item">
        <div class="similar__list__item__img"></div>
        <div class="similar__list__item__title">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="similar__list__item__btn"></div>
      </div>
      <div class="similar__list__item">
        <div class="similar__list__item__img"></div>
        <div class="similar__list__item__title">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="similar__list__item__btn"></div>
      </div>
      <div class="similar__list__item">
        <div class="similar__list__item__img"></div>
        <div class="similar__list__item__title">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="similar__list__item__btn"></div>
      </div>
      <div class="similar__list__item">
        <div class="similar__list__item__img"></div>
        <div class="similar__list__item__title">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="similar__list__item__btn"></div>
      </div>
      <div class="similar__list__item">
        <div class="similar__list__item__img"></div>
        <div class="similar__list__item__title">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="similar__list__item__btn"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.similar {
  padding: 1rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);
  border-radius: 0.25rem;
  background-color: #fff;

  &__top {
    height: 1.1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    &__heading,
    &__btn {
      background-color: #e0e0e0;
      animation: shimmer 1s infinite;
      height: 100%;
      width: 10rem;
    }

    &__btn {
      width: 5rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 100%;

      &__img {
        padding-top: 100%;
        border-radius: 0.5rem;
        background-color: #e0e0e0;
        animation: shimmer 1s infinite;
      }

      &__title {
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .line {
          background-color: #e0e0e0;
          animation: shimmer 1s infinite;
          height: 0.5rem;
        }
      }

      &__btn {
        height: 1.5rem;
        background-color: #e0e0e0;
        animation: shimmer 1s infinite;
        border-radius: 0.25rem;
      }
    }
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
