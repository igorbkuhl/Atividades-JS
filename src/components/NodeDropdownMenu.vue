<script lang="ts" setup>
import { ref } from 'vue';

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
  }
</script>

<template>
  <section :class="`${is_expanded && 'is-expanded'}`">
    <button class="bg-[#3b3036]" @click="ToggleMenu">Node JS</button>
    <div class="links js bg-neutral-500/50">
      <router-link class="link" to="/Atividade_Node_1">Tabuada</router-link>
      <router-link class="link" to="/Atividade_Node_2">Perímetro de Circunferência</router-link>
      <router-link class="link" to="/Atividade_Node_3">Área de Circunferência</router-link>
      <router-link class="link" to="/Atividade_Node_4">Fatorial</router-link>
      <router-link class="link" to="/Atividade_Node_5">RegEx</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  height: 2rem;
  overflow: hidden;
  transition: 0.2s ease-out;

  button {
    padding: 5px;
    cursor: initial;
  }

  .links {
    flex-direction: column;
    display: flex;

    .link {
      font-size: 14pt;
      padding: 5px;

      &:hover, &.router-link-active {
        background-color: #6d4b58;
        transition: .1s cubic-bezier(.45,.05,.55,.95);
      }
      &.router-link-active {
        border-bottom: 1px solid #ffc0cb;
        transition: 0.1s cubic-bezier(0.45,0.05,0.55,0.95);
      }
    }
  }
  &.is-expanded {
    overflow: hidden scroll;
    height: 11.7em;
    transition: 0.2s ease-out;
    cursor: pointer;

    button {
      cursor: pointer;
    }
  }
}
</style>