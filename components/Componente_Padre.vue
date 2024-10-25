<template>
  <div>
    <form @submit.prevent="onSubmit" class="flex items-center max-w-sm mx-auto">
      <input
        v-model="url"
        type="text"
        placeholder="Search domain..."
        class="border p-2 rounded"
        required
      />
      <button type="submit" class="p-2 ms-2 text-sm font-medium bg-blue-700 text-white rounded">
        Buscar
      </button>
    </form>

    <p v-if="error">{{ error }}</p>
    <p v-if="ip">IP: {{ ip }}</p>

    <div v-if="data">
      <ComponenteHijo :data="data" />
    </div>
  </div>
</template>

<script setup>
const url = ref("");
const { ip, error, lookupDomain } = useLookUpDomain();
const { data, callApi } = useCallApi();

const onSubmit = async () => {
  await lookupDomain(url.value);
  if (ip.value) {
    await callApi(ip.value);
  }
};
</script>
