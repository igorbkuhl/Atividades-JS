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
      <div class="home-link activity-link">
			  <router-link class="button" to="/">
			  	<span class="icon">
			  		<i class="fa-solid fa-house"></i>
			  	</span>
			  	<span class="text">Home</span>
			  </router-link>
      </div>
      <div class="temp-link activity-link">
		  	<router-link class="button" to="/Atividade_JS_1">
		  		<span class="icon">
		  			<i class="fa-solid fa-temperature-three-quarters"></i>
		  		</span>
		  		<span class="text temp-text">Conversor</span>
		  	</router-link>
      </div>
      <div class="vote-link activity-link">
		  	<router-link class="button" to="/Atividade_JS_2">
		  		<span class="icon">
		  			<i class="fa-solid fa-users"></i>
		  		</span>
		  		<span class="text">Contagem de votos</span>
		  	</router-link>
      </div>
		</div>
		<div class="dark-mode-area">
			<DarkButton />
		</div>
	</aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }
  
  .menu-toggle-wrap {
    display: flex;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transform: 0.2s ease-out;
    }
      
      .icon .fa-angles-right {
          font-size: 1rem;
          color: var(--light);
          transition: 0.2s ease-out;
          transform: translateX(0.3rem);
      }
      
      &:hover .icon .fa-angles-right {
        color: var(--primary);
        transform: translateX(0.4rem);
      }
  }

  h3, .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .home-link {
      margin-bottom: 1rem;
    }
    .activity-link {
      
      height: 3.2rem;
    }

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      height: inherit;

      padding: 0.3rem 1rem;
      transition: 0.2s ease-out;

      .fa-solid {
        font-size: 1.5rem;
        color: var(--light);
        height: inherit;
        width: 30px;
        transition: 0.2s ease-out;
      }
      .fa-temperature-three-quarters {
        transform: translateX(0.4rem);
      }
      .fa-users {
        transform: translateX(-0.08rem);
      }

      .text {
        color: var(--light);
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .fa-solid, .text {
          color: var(--primary);
        }
      }
      
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {

      .menu-toggle {
        transform: rotate(-180deg) translateX(-0.3rem);
      }
    }

    h3, .button .text {
      opacity: 1;
    }

    .button .fa-solid {
      margin-right: 1rem;
    }
    .button {
      padding: 0.4rem 1rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

  .dark-mode-area {
    display: flex;
    justify-content: flex-start;
    margin: 9rem -1rem 0 -1rem;
  }
}
</style>