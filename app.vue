<script setup>

</script>


<template>
<UContainer class="p-12">
  <NuxtLoadingIndicator
    :height="5"
    :duration="3000"/>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</UContainer>
</template>