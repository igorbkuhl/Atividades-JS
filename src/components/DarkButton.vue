<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
	onChanged(isDark) {
		if(isDark) {
			document.documentElement?.classList.add('dark')
		} else {
			document.documentElement?.classList.remove('dark')
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
	<span class="material-icons-outlined">
brightness_4
</span>
	</button>
</template>