<script setup>
import { toast } from 'vue3-toastify'
let text = 's19.joinserver.xyz:25653'
const copy = () => {
  navigator.clipboard.writeText(text)
}

const logClipboard = () => {
  console.log(navigator.clipboard)
}

const notify = () => {
  toast.success('Вы успешно скопировали содержимое!', { autoClose: 1000 })
}
</script>
<template>
  <ul class="links__list">
    <li>
      <a href="https://disk.yandex.ru/d/jSPLQX0kP1HO8A">Моды</a>
      <iframe src="https://disk.yandex.ru/d/jSPLQX0kP1HO8A" frameborder="0"></iframe>
    </li>
    <li>
      <button @click="notify($event), copy($event), logClipboard($event)">
        Присоединиться к серверу
      </button>
    </li>
  </ul>
</template>
