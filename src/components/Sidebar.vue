<script lang="ts" setup>
import { ref } from 'vue'
import DarkButton from './DarkButton.vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
}
</script>

<template>
	<aside :class="`${is_expanded && 'is-expanded'}`">
		<div class="logo">
			<img src="/vite.svg" alt="Vite">
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="icon">
					<i class="fa-solid fa-angles-right"></i>
				</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link class="button" to="/">
				<span class="icon">
					<i class="fa-solid fa-house"></i>
				</span>
				<span class="text">Home</span>
			</router-link>
			<hr>
			<router-link class="button" to="/Atividade_JS_1">
				<span class="icon">
					<i class="fa-solid fa-house"></i>
				</span>
				<span class="text">Home</span>
			</router-link>
			<router-link class="button" to="/Atividade_JS_2">
				<span class="icon">
					<i class="fa-solid fa-house"></i>
				</span>
				<span class="text">Home</span>
			</router-link>
		</div>
		<div class="dark-mode-area">
			<DarkButton />
		</div>
	</aside>
</template>

<style lang="sass" scoped>
aside
    display: flex
    flex-direction: column
    width: calc(2rem + 32px)
    min-height: 100vh
    overflow: hidden // Is hidden when gets out of screen
    padding: 1rem

    background-color: var(--dark)
    color: var(--light)

    transition: 0.2s ease-out

    .logo
        margin-bottom: 1rem

        img
            width: 2rem

    .menu-toggle-wrap
        display: flex
        justify-content: flex-end
        margin-bottom: 1rem

        position: relative
        top: 0
        transition: 0.2s ease-out

        .menu-toggle
            transition: 0.2s ease-out

            .material-icons
                font-size: 2rem
                color: var(--light)
                transition: 0.2s ease-out

            &:hover
                .material-icons
                    color: var(--primary)
                    transform: translateX(0.5rem)

    h3, .button .text
        opacity: 0
        transition: 0.3s ease-out

    h3
        color: var(--grey)
        font-size: 0.875rem
        margin-bottom: 0.5rem
        text-transform: uppercase

    .menu
        margin: 0 -1rem

        .button
            display: flex
            align-items: center
            text-decoration: none

            padding: 0.5rem 1rem
            transition: 0.2s ease-out

            .material-icons
                font-size: 2rem
                color: var(--light)
                transition: 0.2s ease-out

            .text
                color: var(--light)

            &:hover, &.router-link-exact-active
                background-color: var(--dark-alt)

                .material-icons, .text
                    color: var(--primary)

            &.router-link-exact-active
                border-right: 5px solid var(--primary)

    &.is-expanded
        width: var(--sidebar-width)

        .menu-toggle-wrap
            top: -3rem

            .menu-toggle
                transform: rotate(-180deg)

        h3, .button .text
            opacity: 1

        .button
            .material-icons
                margin-right: 1rem

    @media (max-width: 768px)
        position: fixed
        z-index: 99

hr
    margin-bottom: 2rem

    border: solid 1px var(--dark)
</style>