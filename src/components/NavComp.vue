<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">Arcade</li>
      <li class="nav__item">Action</li>
      <li class="nav__item">Advanture</li>
      <li class="nav__item nav__item--active">Sports</li>
      <li class="nav__item">Arcade</li>
      <li class="nav__item">Action</li>
      <li class="nav__item">Advanture</li>
      <li class="nav__item">Arcade</li>
      <li class="nav__item">Action</li>
      <li class="nav__item">Advanture</li>
      <li class="nav__item">Arcade</li>
      <li class="nav__item">Action</li>
      <li class="nav__item">Advanture</li>
      <li class="nav__item">Arcade</li>
      <li class="nav__item">Action</li>
      <li class="nav__item">Advanture</li>
    </ul>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.nav {
  background-color: #fff;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);

  &__list {
    height: 3rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    overflow-x: scroll;

    // hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    height: 1.5rem;
    line-height: 1.4rem;
    padding: 0 0.75rem;
    border: 1px solid #d2d2d2;
    border-radius: 0.6rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--clr-neutral-600);
    cursor: pointer;

    &--active {
      background-color: var(--clr-primary);
      border-color: var(--clr-primary);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      &::after {
        content: '';
        display: block;
        width: 0.3rem;
        height: 0.6rem;
        border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: rotate(30deg);
      }
    }
  }
}
</style>
