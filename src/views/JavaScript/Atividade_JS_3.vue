<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      num: 0,
      result: "",
      advice: "",
    };
  },
  methods: {
    leapYear(year: number): void {
      if (typeof year == "string") {
        alert("Insira um número.");
      } else if (this.num == null || this.num == undefined) {
        this.advice = "Para calcular, insira um ano.";
      } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        this.result = `O ano ${year} é bissexto!`;
      } else {
        this.result = `O ano ${year} não é bissexto.`;
      }
    },
  },
});
</script>

<template>
  <main>
    <div class="main-area place-content-stretch">
      <h1>Detector de Anos Bissextos</h1>
      <input type="number" pattern="[0-9]+" required v-model="num" />
      <button class="bg-rose-900" @click="leapYear(num)">Calcular</button>
      <p>{{ result || advice }}</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {

  .main-area {
    display: flex;
    flex-direction: column;


    h1 {
      text-align: center;
    }

    input, button {
      margin: 10px 0;
      padding: 10px;
      transform: translateX(2rem);
    }
    button {
      border: solid 1px #ddc9cf;
      border-radius: 5px;
      font-weight: bold;
      width: 18.5pc;
    }
    
    p {
      font-size: 16pt;
      margin-top: 15px;
      text-align: center;
    }
  }
}
</style>
