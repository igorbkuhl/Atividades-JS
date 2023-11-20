<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        winnerText: "",
        counter: 0,
        shuffles: 0,
      };
    },
    methods: {
      shuffle() {
        let participants = [];
        this.counter = 0;
        while (true) {
          const userInput = prompt(`Insira o nome do ${this.counter + 1}º participante.`);
          participants.push({ name: userInput })

          if(!confirm("Deseja adicionar mais um participante?")) {
            break;
          }
          this.counter++;
          this.shuffles++;
        }
        if (participants.length >= 2) {
          const randomIndex = Math.floor(Math.random() * (participants.length));
          this.winnerText = `${participants[randomIndex].name}`;
        } else {
          alert("Informe no mínimo dois participantes.");
        }
      },
    },
  });
</script>
<template>
  <main>
    <div class="main-area">
      <p v-if="shuffles > 0">O vencedor é...</p>
      <p>{{ winnerText }}</p>
      <button class="bg-rose-200 dark:bg-rose-900" @click="shuffle">
        <span v-if="shuffles == 0">Sortear</span>
        <span v-else>Sortear novamente</span>
      </button>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main-area {
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
    font-size: 28px;
    margin: 5px 0;
    display: inherit;
    flex-direction: inherit;
  }

  button {
    border-radius: 10px;
    padding: 20px;

    span {
      font-size: 24px; 
    }
  }
}

</style>
