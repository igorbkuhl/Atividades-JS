<template>
	<main class="home-page">
		<h1>Home</h1>
		<div class="links">
			<div class="js-links">
				<h2>JavaScript</h2>
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
			<div class="node-links">
				<h2>NodeJS</h2>
				<router-link class="link" to="/Atividade_Node_1">Tabuada</router-link>
				<router-link class="link" to="/Atividade_Node_2">Perímetro de Circunferência</router-link>
				<router-link class="link" to="/Atividade_Node_3">Área de Circunferência</router-link>
				<router-link class="link" to="/Atividade_Node_4">Fatorial</router-link>
				<router-link class="link" to="/Atividade_Node_5">RegEx</router-link>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
main {
	height: 100vh;

	h1 {
		text-align: left;
	}

	.links {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		height: 100%;

		.js-links {
			display: flex;
			flex-direction: column; margin: 1rem;

			.link {
				padding: 0.5em;
			}
			.link:hover {
				@apply bg-[#f7bcc985] dark:bg-[#7a6570] rounded-md
			}

			h2 {
				margin-bottom: 1rem;
				font-size: 20pt;
				text-decoration: underline;
			}
		}

		.node-links {
			display: flex;
			flex-direction: column;
			margin: 1rem;

			h2 {
				margin-bottom: 1rem;
				font-size: 20pt;
				text-decoration: underline;
			}

			.link {
				padding: 0.5em;
			}
			.link:hover {
				// background-color: rgb(122, 101, 112);
				// border-radius: 8px;
				@apply bg-[#f7bcc985] dark:bg-[#7a6570] rounded-md
			}
		}
}
}
</style>