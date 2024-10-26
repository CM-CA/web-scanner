// composables/useCallApi.ts
export default function useCallApi() {
  
  const data = ref(null)
  const error = ref(null)
  const callApi = async (ip) => {
    const urlAPI = `https://vulnerability-scanner2.p.rapidapi.com/${ip}`
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key":  "a97bd13549msh71d5393b9cb77d4p1415c5jsn3a555b07a4d5",
        "x-rapidapi-host": "vulnerability-scanner2.p.rapidapi.com",
      },
      server: true, // Permite ejecutar en SSR
    }

    try {
      const { data: apiData, error: apiError } = await useFetch(urlAPI, {
        ...options,
        onResponseError({  response }) {
          console.error("Error en onResponseError:", response)
        },
      })
      if (apiError.value) {
        error.value = apiError.value // Asigna el error si existe
        console.error("Error en callApi:", apiError.value)
      } else {
        data.value = apiData.value // Asigna los datos obtenidos
       
      }
    } catch (err) {
      error.value = err
      console.error("Error en callApi:", err)
    }
  }

  return { data, error, callApi }
}