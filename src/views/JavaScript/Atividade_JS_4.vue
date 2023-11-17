<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      firstValue: 0,
      operation: "",
      secondValue: 0,
      result: 0,
      resultTxt: "",
    }
  },
  methods: {
    calculate() {
      while (true) {

        this.firstValue = Number(prompt("Insira o primeiro valor a ser calculado: "));
        this.operation = prompt("Insira a operação desejada: ")!;
        this.secondValue = Number(prompt("Insira o segundo valor a ser calculado: "));

        switch (this.operation) {
          case "+":
            this.result = this.firstValue + this.secondValue;
            break;
          case "-":
            this.result = this.firstValue - this.secondValue;
            break;
          case "*":
            this.result = this.firstValue * this.secondValue;
            break;
          case "/":
            this.result = this.firstValue / this.secondValue;
            break;
          default:
            alert("Insira uma operação com uma das opções: +, -, *, /");
            break;
        }
        this.resultTxt = `Resultado: ${this.result.toString()}`;

        alert(this.result);

        if (!confirm("Deseja realizar mais um cálculo?")) {
          break;
        }

      }
    }
  }
})
</script>

<template>
  <main>
    <div class="main-area">
      <h1>Calculadora em JavaScript Prompt</h1>
      <input type="button" value="Calcular" @click="calculate">
      <p>{{ resultTxt }}</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-area {

  p {
    font-size: 16pt;
    margin-top: 3rem;
    text-align: center;
  }

  input {
    position: relative;
    top: 1rem;
    left: 2rem;
    padding: 10px;
  }
}
</style>
