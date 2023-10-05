<script lang="ts" setup>
import { ref } from 'vue';

const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<template>
  <section :class="`${is_expanded && 'is-expanded'}`">
    <button class="bg-[#3b3036]" @click="ToggleMenu">JavaScript</button>
    <div class="links js bg-neutral-500/50">
      <router-link class="link" to="/Atividade_JS_1">Conversor de Temperaturas</router-link>
      <router-link class="link" to="/Atividade_JS_2">Contagem de Votos</router-link>
      <router-link class="link" to="/Atividade_JS_3">Detector de Anos bissextos</router-link>
      <router-link class="link" to="/Atividade_JS_4">Calculadora Prompt</router-link>
      <router-link class="link" to="/Atividade_JS_5">Caixas Premiadas</router-link>
      <router-link class="link" to="/Atividade_JS_6">Sorteio</router-link>
      <router-link class="link" to="/Atividade_JS_7">Cifra de César</router-link>
      <router-link class="link" to="/Atividade_JS_8">Boletim</router-link>
      <router-link class="link" to="/Atividade_JS_9">Idades</router-link>
      <router-link class="link" to="/Atividade_JS_10">Bloco Dinâmico</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  height: 2rem;
  overflow: hidden hidden;
  transition: 0.2s ease-out;
  border-bottom: 1px #292828a4 solid;

  button {
    padding: 5px;
  }

  .links {
    flex-direction: column;
    display: flex;

    .link {
      font-size: 14pt;
      padding: 5px;

      &:hover,
      &.router-link-active {
        background-color: #6d4b58;
        transition: 0.1s cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }

      &.router-link-active {
        border-bottom: 1px solid #ffc0cb;
        transition: 0.1s cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
    }
  }

  &.is-expanded {
    overflow: hidden scroll;
    height: 15rem;
    transition: 0.2s ease-out;
  }
}
</style>