import { ref } from 'vue';

export function useFetch(url) {
  const API_URL = `https://vue-games-29cd5-default-rtdb.firebaseio.com/${url}.json`;
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: import.meta.VUE_APP_API_URL,
    },
  })
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
