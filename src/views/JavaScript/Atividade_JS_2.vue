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
      <h1>Contagem de votos</h1>
      <div class="vote-area">
        <div class="electors">
          <div class="votes">
            <h2>Regis da Costa</h2>
            <p class="percentage">
              <span>{{ regisDaCosta }}</span>
              {{ ` (${calculatePercentage(regisDaCosta, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="votes">
            <h2>Paulo Machado</h2>
            <p class="percentage">
              <span>{{ pauloMachado }}</span>
              {{ ` (${calculatePercentage(pauloMachado, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="votes">
            <h2>Maria Pinho</h2>
            <p class="percentage">
              <span>{{ mariaPinho }}</span>
              {{ ` (${calculatePercentage(mariaPinho, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="votes">
            <h2>Angela Martins</h2>
            <p class="percentage">
              <span>{{ angelaMartins }}</span>
              {{ ` (${calculatePercentage(angelaMartins, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="votes">
            <h2>Mateus Silvério</h2>
            <p class="percentage">
              <span>{{ mateusSilverio }}</span>
              {{ ` (${calculatePercentage(mateusSilverio, calculateTotal(total))}%)` }}
            </p>
          </div>
        </div>
        <div class="other-votes">
          <div class="votes">
            <h2>Votos brancos</h2>
            <p class="percentage">
              <span>{{ blancVotes }}</span>
              {{ ` (${calculatePercentage(blancVotes, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="votes">
            <h2>Votos nulos</h2>
            <p class="percentage">
              <span>{{ nullVotes }}</span>
              {{ ` (${calculatePercentage(nullVotes, calculateTotal(total))}%)` }}
            </p>
          </div>
          <div class="total-votes">
            <h2>Votos totais</h2>
            <p class="votes">{{ `${total} votos` }}</p>
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

        h2 {
          font-weight: bold;
        }
        p {
          font-style: italic;
        }
      }
    }
    .other-votes {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: right;

      .votes {
        margin-bottom: 10px;
        
        h2 {
          font-weight: bold;
        }
        p {
          font-style: italic;
        }
      }

      .total-votes {
        margin-top: 7em;

        h2 {
          font-weight: bold;
        }
        p {
          font-style: italic;
        }
      }
    }
  }
}
</style>