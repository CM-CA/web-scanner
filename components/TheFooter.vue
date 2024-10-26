<template>
  <UContainer>
    <footer
      class="bg-white dark:bg-gray-900 fixed w-full z-20 bottom-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div
        class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4"
      >
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024
          <a href="https://cm-ca.github.io" class="hover:underline">Okud4™</a>.
       
        </span>
        <ul
          class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >

        <!-- <li>
            <a class="hover:underline me-4 md:me-6">
              <NuxtLink :to="{ name: 'index' }">Política de Privacidad</NuxtLink>
            </a>
          </li> -->
          <li>
            <a class="hover:underline me-4 md:me-6">
              <NuxtLink :to="{ name: 'licencia' }">Licencia</NuxtLink>
            </a>
          </li>
          <li>
            <a class="hover:underline me-4 md:me-6">
              <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
            </a>
          </li>
          <!-- <li>
              <a
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                ><NuxtLink :to="{ name: 'about' }">About</NuxtLink></a
              >
            </li> -->

          <li>
            <NuxtLink
              to="https://cm-ca.github.io"
              :external="true"
              target="_blank"
            >
              <a class="hover:underline me-4 md:me-6">Contacto </a>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </footer>
  </UContainer>
</template>

<style></style>
