<script lang="ts">
import { defineComponent } from 'vue'
import Conversor from './JavaScript/Atividade_JS_1.vue'
import Sidebar from '../components/Sidebar.vue'

export default defineComponent({
    name: 'MainView',
    components: Conversor
})
</script>

<template>
    <Sidebar />
    <Conversor />
</template>