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
		class="px-3 py-1 ty-2 text-white"
	>
	<span class="icon">
		<i id="toggleButton" class="fa-solid fa-sun"></i>
	</span>
	</button>
</template>

<style lang="scss" scoped>
button {
	transform: translateX(0.55rem);
	.fa-sun {
		font-size: 1.15rem;
	}
	.fa-moon {
		font-size: 1.5rem;
	}
}
</style>