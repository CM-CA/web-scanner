// composables/useCallApi.ts
export default function useCallApi() {
  const data = useState('data', () => null);
  const error = useState('apiError', () => '');

  const callApi = async (ip) => {
    const urlAPI = `https://vulnerability-scanner2.p.rapidapi.com/${ip}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NUXT_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.NUXT_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await fetch(urlAPI, options);
      data.value = await response.json();
      error.value = ''; // Limpiar error si la API responde correctamente
    } catch (err) {
      error.value = "Error al obtener datos de la API: " + err.message;
    }
  };

  return { data, error, callApi };
}
