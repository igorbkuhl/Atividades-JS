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
        
        sum >= 65 && sum <= 90 ? this.encryptedTxt += String.fromCharCode(sum) :
        sum > 90 ? this.encryptedTxt += String.fromCharCode(65 + (sum - 91)) :
        this.encryptedTxt += this.originalTxt[i]
        console.log(this.encryptedTxt.charCodeAt());
      }
    }
  },
});
</script>

<template>
  <main>
    <div class="main-area">
      <h1>Cifra de Cesar</h1>
      <div class="form">
        <input 
          type="text" 
          style="text-transform: uppercase"
          v-model="originalTxt"
        />
        <input
          type="number"
          v-model="modifier"
        />
        <input
          type="text"
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
        <!-- <button class="bg-rose-200 dark:bg-rose-900" @click="copy">Copiar</button> -->
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
  }

  .buttons {
    display: inherit;
    flex-direction: row;
    justify-content: center;

    button {
      padding: 15px;
      border-radius: 10px;
      margin: 15px;
    }
  }
}
</style>
