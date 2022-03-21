<template>
  <form class="form" autocomplete="off">
    <strong class="form__title">Please add your account details</strong>

    <fieldset class="form__group">
      <input
        class="form__group__field"
        :class="{
          'form__group__field--err': formValid$.userName.$errors.length,
        }"
        type="text"
        v-model="formValid$.userName.$model"
        id="userName"
        placeholder="Type your username here"
      />
      <span class="form__err">
        <span
          v-for="(error, index) in formValid$.userName.$errors"
          :key="index"
        >
          {{ error.$message }}
        </span>
      </span>
      <label class="form__group__label" for="userName">Username / Email</label>
    </fieldset>

    <fieldset class="form__group">
      <input
        class="form__group__field"
        :class="{
          'form__group__field--err': formValid$.password.$errors.length,
        }"
        type="password"
        v-model="formValid$.password.$model"
        id="password"
        placeholder="Type your password"
      />
      <span class="form__err">
        <span
          v-for="(error, index) in formValid$.password.$errors"
          :key="index"
        >
          {{ error.$message }}
        </span>
      </span>
      <label class="form__group__label" for="password">Password</label>
    </fieldset>

    <button class="form__forget-password" type="button">
      Forget Password?
    </button>
    <button class="form__submit" type="button">Login</button>
    <span class="form__signup">
      Don't have an account?
      <button class="form__signup__cta" type="button">Sign Up!</button>
    </span>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { reactive, toRefs } from '@vue/reactivity';

export default {
  setup() {
    const formData = reactive({
      userName: '',
      password: '',
    });

    const validators = {
      userName: {
        required,
        email,
      },
      password: {
        required,
      },
    };

    const formValid$ = useVuelidate(validators, formData);

    return {
      ...toRefs(formData),
      formValid$,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #fff;
  position: absolute;
  right: 1rem;
  top: 2rem;
  width: 15rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(-1rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms linear, transform 150ms linear;

  &--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &__title {
    font-weight: bold;
    font-size: 0.7rem;
    color: var(--clr-neutral-600);
    opacity: 80%;
    margin-bottom: 0.5rem;
  }

  &__group {
    border: none;
    position: relative;
    margin-bottom: 0.25rem;

    &__field {
      width: 100%;
      font-size: 0.75rem;
      padding: 0.6rem 0.1rem;
      background: linear-gradient(90deg, var(--clr-primary), var(--clr-primary))
          bottom/0 2px no-repeat,
        linear-gradient(90deg, var(--clr-neutral-600), var(--clr-neutral-600))
          bottom/100% 2px no-repeat;
      color: var(--clr-neutral-600);
      transition: background-size 150ms linear;

      &:focus {
        background-size: 100% 2px, 100% 2px;
      }

      &--err {
        background: linear-gradient(90deg, indianred, indianred) bottom/100% 2px
          no-repeat;
      }
    }

    &__label {
      position: absolute;
      top: -0.4rem;
      left: 0;
      font-size: 0.65rem;
      color: var(--clr-neutral-800);
      z-index: 2;
    }
  }

  &__err {
    font-size: 0.6rem;
    color: indianred;
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 100%;

    > * {
      font-weight: 500;
    }
  }

  &__forget-password {
    width: fit-content;
    font-size: 0.7rem;
    font-weight: bold;
    align-self: flex-end;
    color: var(--clr-primary);
  }

  &__submit {
    background-color: var(--clr-primary);
    color: #fff;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1;
    padding: 0.4rem 0;
    border-radius: 0.25rem;
  }

  &__signup {
    font-size: 0.7rem;
    color: var(--clr-primary);
    text-align: center;

    &__cta {
      font-weight: bold;
      color: var(--clr-primary);
    }
  }

  @media (max-width: 36rem) {
    width: calc(100% - 2rem);
    top: 5rem;
    right: 1rem;
    left: 1rem;
  }
}
</style>
