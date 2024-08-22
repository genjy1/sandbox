<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="py-4 border-b-white border-b-2 flex items-center">
    <div class="container w-4/5 mx-auto my-0 flex items-center justify-between">
      <div class="logo-container flex gap-2 items-center">
        <RouterLink :to="{ name: 'main' }"><img src="/logo.png" alt="Sandbox Server Logo" class="w-36"></RouterLink>
      </div>
      <ul class="header__nav flex gap-4 items-center">
        <li class="nav-item">
          <RouterLink :to="{ name: 'patches' }">Патч-ноуты</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'requirements' }">Требования</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'links' }">Ссылки</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <RouterView class="w-4/5 mx-auto my-0 pt-4" />
</template>
