<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
	onChanged(isDark) {
		if(isDark) {
			document.documentElement?.classList.add('dark')
			document.querySelector('#toggleButton')?.classList.replace('fa-sun', 'fa-moon');
		} else {
			document.documentElement?.classList.remove('dark')
			document.querySelector('#toggleButton')?.classList.replace('fa-moon', 'fa-sun');
		}
	},
})
const toggleDark = useToggle(isDark)
</script>

<template>
	<button
		@click="toggleDark()"
		class="px-4 ty-2 text-white bg-slate-700 rounded dark:bg-stone-500"
	>
	<span class="icon">
		<i id="toggleButton" class="fa-solid fa-sun"></i>
	</span>
	</button>
</template>