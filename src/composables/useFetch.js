import { ref } from 'vue';

export function useFetch(url) {
  const API_URL = `${import.meta.env.VITE_API_URI}${url}.json`;
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      if (json) {
        isLoading.value = false;
      }
      return (data.value = json);
    })
    .catch((err) => (error.value = err));

  return { data, error, isLoading };
}
