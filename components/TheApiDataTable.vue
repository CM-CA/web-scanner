<template>
  <div>
    <div class="relative overflow-x-auto mt-4">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">CPEs</th>
            <th scope="col" class="px-6 py-3">Hostnames</th>
            <th scope="col" class="px-6 py-3">IP</th>
            <th scope="col" class="px-6 py-3">Ports</th>
            <th scope="col" class="px-6 py-3">Vulnerabilities</th>
            <th scope="col" class="px-6 py-3">Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr
           
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4">
              <ul>
                <li>{{ data.cpes.join(', ')}}</li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <ul>
                <li >{{ data.hostnames.join(', ') }}</li>
              </ul>
            </td>
            <td class="px-6 py-4">{{ data.ip }}</td>
            <td class="px-6 py-4">
              <ul>
                <li >{{ data.ports.join(', ') }}</li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <ul>
                <li >{{ data.vulns.join(', ') }}</li>
              </ul>
            </td>
            <td class="px-6 py-4">
              <ul>
                <li >{{ data.tags.join(', ') }}</li>
              </ul>
            </td>
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
