<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Atividade_JS_2",
  data() {
    return {
      regisDaCosta: 800,
      pauloMachado: 300,
      mariaPinho: 700,
      angelaMartins: 500,
      mateusSilverio: 400,
      blancVotes: 60,
      nullVotes: 40,
      total: 0
    }
  },
  methods: {
    calculateTotal(result: number) {
      this.total = this.regisDaCosta + this.pauloMachado + this.mariaPinho + this.angelaMartins + this.mateusSilverio + this.blancVotes + this.nullVotes;
      result = this.total
      return result;
    },
    calculatePercentage(elector: number, totalVotes: number) {
      return ((elector / totalVotes) * 100).toFixed(1)
    },
  },
})
</script>

<template>
  <main>
    <div class="main-area">
      <h1>Total de votos</h1>
      <div class="vote-area">
        <div class="electors">
          <div class="votes">
            <h2>Regis da Costa</h2>
            <p class="percentage">{{ `${calculatePercentage(regisDaCosta, calculateTotal(total))} %` }}</p>
          </div>
          <div class="votes">
            <h2>Paulo Machado</h2>
            <p class="percentage">{{ `${calculatePercentage(pauloMachado, calculateTotal(total))} %` }}</p>
          </div>
          <div class="votes">
            <h2>Maria Pinho</h2>
            <p class="percentage">{{ `${calculatePercentage(mariaPinho, calculateTotal(total))} %` }}</p>
          </div>
          <div class="votes">
            <h2>Angela Martins</h2>
            <p class="percentage">{{ `${calculatePercentage(angelaMartins, calculateTotal(total))} %` }}</p>
          </div>
          <div class="votes">
            <h2>Mateus Silvério</h2>
            <p class="percentage">{{ `${calculatePercentage(mateusSilverio, calculateTotal(total))} %` }}</p>
          </div>
        </div>
        <div class="other-votes">
          <div class="votes">
            <h3>Votos brancos</h3>
            <p class="percentage">{{ `${calculatePercentage(blancVotes, calculateTotal(total))} %` }}</p>
          </div>
          <div class="votes">
            <h3>Votos nulos</h3>
            <p class="percentage">{{ `${calculatePercentage(nullVotes, calculateTotal(total))} %` }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-area {
  h1 {
    text-align: center;
  }
  .vote-area {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    .electors {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: left;

      .votes {
        margin-bottom: 10px;
      }
    }
    .other-votes {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: right;
      margin-bottom: 10px;
    }
  }
}
</style>