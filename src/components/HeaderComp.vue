<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__left" aria-level="Logo Icon">
        <img src="@/assets/Logo_5.png" alt="Logo" />
      </router-link>

      <div class="header__right">
        <div
          class="header__right__search"
          :class="{ 'header__right__search--active': isOpenInput }"
        >
          <svg class="open-input" width="22" height="21" @click="openInput">
            <path
              d="M14.667,15.3h0l-4.583-4.365v-.691L9.836,10a6.12,6.12,0,0,1-3.878,1.373A5.834,5.834,0,0,1,0,5.687,5.834,5.834,0,0,1,5.958,0a5.834,5.834,0,0,1,5.958,5.687,5.529,5.529,0,0,1-1.439,3.7l.257.236h.724L16.032,14l-1.365,1.3ZM5.958,1.75A4.039,4.039,0,0,0,1.833,5.687,4.039,4.039,0,0,0,5.958,9.625a4.039,4.039,0,0,0,4.125-3.938A4.039,4.039,0,0,0,5.958,1.75Z"
            />
          </svg>

          <svg
            class="close-input"
            viewBox="0 0 15.751 15.751"
            @click="closeInput"
          >
            <path
              d="M7876-4393.25a1,1,0,0,1-1-1v-5.374h-5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1h5V-4408a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v5.375h5.749a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H7878v5.374a1,1,0,0,1-1,1Z"
              transform="translate(-7868.999 4409.001)"
            />
          </svg>

          <input
            class="header__right__search__input"
            type="text"
            ref="searchInput"
          />
        </div>

        <div class="header__right__login">
          <svg width="22" height="21" @click="openForm">
            <path
              d="M1.833,15.75a1.752,1.752,0,1,1,0-3.5,1.752,1.752,0,1,1,0,3.5Zm0-6.125A1.8,1.8,0,0,1,0,7.875a1.8,1.8,0,0,1,1.833-1.75,1.8,1.8,0,0,1,1.833,1.75A1.8,1.8,0,0,1,1.833,9.625Zm0-6.125A1.8,1.8,0,0,1,0,1.75,1.8,1.8,0,0,1,1.833,0,1.8,1.8,0,0,1,3.666,1.75,1.8,1.8,0,0,1,1.833,3.5Z"
            />
          </svg>

          <LoginForm :class="{ 'form--open': isOpenForm }" ref="formElement" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import LoginForm from './LoginForm.vue';

export default {
  components: {
    LoginForm,
  },

  setup() {
    const searchInput = ref(null);
    const formElement = ref(null);
    const isOpenInput = ref(false);
    const isOpenForm = ref(false);

    function openInput() {
      searchInput.value.focus();
      isOpenInput.value = true;
    }

    function closeInput() {
      searchInput.value.blur();
      isOpenInput.value = false;
    }

    function openForm(event) {
      isOpenForm.value = true;
      event.stopPropagation();
    }

    // click outside to close form
    function clickOutSide(event) {
      if (isOpenForm.value && !formElement.value.$el.contains(event.target)) {
        isOpenForm.value = false;
      }
    }

    onMounted(() => {
      window.addEventListener('click', clickOutSide);
    });

    onUnmounted(() => {
      window.removeEventListener('click', clickOutSide);
    });

    return {
      openInput,
      closeInput,
      searchInput,
      formElement,
      isOpenInput,
      isOpenForm,
      openForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 5rem;
  position: relative;
  z-index: 1;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right {
    display: flex;
    gap: 1rem;
    fill: var(--clr-primary);

    &__login {
      position: relative;
    }

    &__search,
    &__login {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
        margin-top: 0.25rem;
      }
    }

    &__search {
      position: relative;

      .open-input {
        transform: translateX(10rem);
        z-index: 1;
        transition: transform 150ms linear;
        transform-origin: left;
      }

      .close-input {
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        z-index: 2;
        right: 0;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        margin: 0;
        opacity: 0;
        pointer-events: none;
        fill: indianred;
        transition: opacity 200ms ease-in-out;
      }

      &__input {
        font-size: 0.7rem;
        font-weight: 700;
        padding-left: 1.5rem;
        height: 1.5rem;
        transform: scaleX(0);
        width: 10rem;
        transform-origin: right;
        opacity: 0;
        transition: transform 150ms linear, opacity 100ms ease-in;
        border-radius: 0.3rem;
        color: var(--clr-primary);
        caret-color: currentColor;
        background: linear-gradient(90deg, rgb(87 37 137 / 10%), white);
      }

      &--active &__input {
        transform: scaleX(1);
        opacity: 1;
      }

      &--active .open-input {
        transform: translateX(1.5rem);
      }

      &--active .close-input {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  @media (max-width: 36rem) {
    > div {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }

    &__left {
      display: block;
      height: 3rem;

      img {
        height: 4.5rem;
      }
    }

    &__right {
      align-self: flex-end;
      gap: 2rem;

      &__login {
        position: static;
      }
    }
  }
}
</style>
