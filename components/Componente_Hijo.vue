<template>
  <div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">CPEs</th>
            <th scope="col" class="px-6 py-3">Hostnames</th>
            <th scope="col" class="px-6 py-3">IP</th>
            <th scope="col" class="px-6 py-3">Ports</th>
            <th scope="col" class="px-6 py-3">Tags</th>
            <th scope="col" class="px-6 py-3">Vulns</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{{ data.cpes.join(', ') }}</td>
            <td class="px-6 py-4">{{ data.hostnames.join(', ') }}</td>
            <td class="px-6 py-4">{{ data.ip }}</td>
            <td class="px-6 py-4">{{ data.ports.join(', ') }}</td>
            <td class="px-6 py-4">{{ data.tags.join(', ') || 'N/A' }}</td>
            <td class="px-6 py-4">{{ data.vulns.join(', ') || 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object // Recibe el objeto 'data' del padre
});
</script>
