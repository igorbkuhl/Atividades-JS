<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      originalTxt: "",
      encryptedTxt: "",
      modifier: 1,
    };
  },
  methods: {
    encrypt() {
      this.encryptedTxt = "";
      for(let i = 0; i < this.originalTxt.length; i++) {

        let asciiNum = this.originalTxt[i].toUpperCase().charCodeAt();
        let sum = asciiNum + this.modifier;

        if (sum >= 65 && sum <= 90) {
          this.encryptedTxt += String.fromCharCode(sum);
        } else if (sum > 90) {
          this.encryptedTxt += String.fromCharCode(
            ((this.originalTxt.toUpperCase().charCodeAt() - 65 + this.modifier + 26) % 26) + 65
          );
        } else {
          this.encryptedTxt += this.originalTxt[i];
          };
        };
      },
      copy() {
        navigator.clipboard.writeText(this.encryptedTxt)
        alert(`Texto copiado: ${this.encryptedTxt}`);
      },
    },
});
</script>

<template>
  <main>
    <div class="main-area">
      <h1>Cifra de Cesar</h1>
      <div class="form">
        <label for="originalTxt">Texto inicial</label>
        <input
          type="text"
          name="originalTxt"
          class="bg-rose-50 bg-rose-50 dark:bg-[#810b4c]"
          style="text-transform: uppercase"
          v-model="originalTxt"
          @keyup.enter="encrypt"
        />
        <label for="modifier">Modificador</label>
        <input
          type="number"
          name="modifier"
          v-model="modifier"
          @keyup.enter="encrypt"
        />
        <label for="encryptedTxt">Resultado</label>
        <input
          type="text"
          name="encryptedTxt"
          class="bg-rose-50 bg-rose-50 dark:bg-[#810b4c]/75"
          disabled
          v-model="encryptedTxt"
        />
      </div>
      <div class="buttons">
        <button
          class="bg-rose-200 dark:bg-rose-900"
          @click="encrypt"
          @keyup.enter="encrypt"
        >
          Encriptar
        </button>
        <button
          class="bg-rose-200 dark:bg-rose-900"
          @click="copy"
        >
          Copiar
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-area {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
  }

  .form {
    display: inherit;
    flex-direction: column;
    justify-content: center;

    input {
      font-size: 16pt;
      text-align: center;
      margin: 0.4em auto;
      height: 2.5em;
    }
    label {
      position: relative;
      transform: translateX(2.5em);
    }
  }

  .buttons {
    display: inherit;
    flex-direction: row;
    justify-content: center;

    button {
      padding: 1em;
      border-radius: 10px;
      margin: 1em;
    }
  }
}
</style>
