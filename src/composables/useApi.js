import { ref } from 'vue';
import httpClient from '../plugins/interceptor';

// This is an example of composable in vue 3
export default function useApi() {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    async function fetchData(url) {
        try {
            loading.value = true;
            const response = await httpClient.get(url);
            data.value = response.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    return { data, error, loading, fetchData };
}