<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<style lang="sass">
:root
  --primary: #ff9ca8
  --grey: #64748b
  --dark: #1f1321
  --dark-alt: #334155
  --light: #f1f5f9
  --background: #242424
  --sidebar-width: 300px

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Fira sans', sans-serif

body
  background: var(--background)
  height: 100vh
  width: 100vw

button
  cursor: pointer
  appearance: none
  border: none
  outline: none
  background: none

.app
  display: flex

  main
    flex: 1 1 0
    padding: 2rem

    @media (max-width: 768px)
      padding-left: 6rem
</style>