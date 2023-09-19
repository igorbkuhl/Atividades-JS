<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
  name: "Atividade_JS_1",
  data() {
    return {
			tempF: 0,
			tempC: 0,
			tempK: 0,
      srcF: "fahrenheit",
      srcC: "celsius",
      srcK: "kelvin",
      srcT: "",
      tempT: 0,
    }
  },
	methods: {
		conversor(source: string, valNum: number): void {
      
			let fahrenheit = (document.querySelector("input#fahrenheit") as HTMLInputElement).value;
			let celsius = (document.querySelector("input#celsius") as HTMLInputElement).value;
			let kelvin = (<HTMLInputElement>document.querySelector("input#kelvin")).value;
			this.tempF = parseFloat(fahrenheit);
			this.tempC = parseFloat(celsius);
			this.tempK = parseFloat(kelvin);

      switch(source) {
        case "fahrenheit":
				  this.tempC = Number((valNum - 32) / 1.8);
				  this.tempK = Number(((valNum - 32) / 1.8) + 273.15);
          this.srcT = "fahrenheit";
          this.tempT = this.tempF;
          break;
        case "celsius":
          this.tempF = Number((valNum * 1.8) + 32);
          this.tempK = Number((valNum) + 273.15);
          this.srcT = "celsius";
          this.tempT = this.tempC;
          break;
        case "kelvin":
          this.tempF = Number(((valNum - 273.15) * 1.8) + 32);
          this.tempC = Number((valNum) - 273.15);
          this.srcT = "kelvin";
          this.tempT = this.tempK;
          break;
        default:
          alert('Algo deu errado');
          break;
      }

      fahrenheit = this.tempF.toFixed(2);
      celsius = this.tempC.toFixed(2);
      kelvin = this.tempK.toFixed(2);
      
      console.log(source, valNum);
      console.log(fahrenheit, celsius, kelvin);
      console.log(this.srcT, this.tempT);
		},
    increaseFahrenheit(): void {
      this.tempF++
      this.tempT = this.tempF
      this.srcT = this.srcF
    },
    decreaseFahrenheit(): void {
      this.tempF--
      this.tempT = this.tempF
      this.srcT = this.srcF
    },
    increaseCelsius(): void {
      this.tempC++
      this.tempT = this.tempC
      this.srcT = this.srcC
    },
    decreaseCelsius(): void {
      this.tempC--
      this.tempT = this.tempC
      this.srcT = this.srcC
    },
    increaseKelvin(): void {
      this.tempK++
      this.tempT = this.tempK
      this.srcT = this.srcK
    },
    decreaseKelvin(): void {
      this.tempK--
      this.tempT = this.tempK
      this.srcT = this.srcK
    }
	}
})
</script>

<template>
  <main id="temp-converter">
    <div class="main-area">
      <h1>Conversor de temperaturas</h1>
      <div class="fahrenheit temp-area">
        <label for="fahrenheit">Fahrenheit</label>
        <div class="temp-inputs">
          <input
            type="number"
            id="fahrenheit"
            placeholder="Valor em Fahrenheit"
            v-model="tempF"
            @change="conversor(srcF, tempF)"
          />
          <input type="button" value="+" id="increaseF" class="increase-button" @click="increaseFahrenheit()" />
          <input type="button" value="–" id="decreaseF" class="decrease-button" @click="decreaseFahrenheit()" />
        </div>
      </div>
      <div class="celsius temp-area">
        <label for="celsius">Celsius</label>
        <div class="temp-inputs">
          <input
            type="number"
            id="celsius"
            placeholder="Valor em Celsius"
            v-model="tempC"
            @change="conversor(srcC, tempC)"
          />
          <input type="button" value="+" id="increaseC" class="increase-button" @click="increaseCelsius()" />
          <input type="button" value="–" id="decreaseC" class="decrease-button" @click="decreaseCelsius()" />
        </div>
      </div>
      <div class="kelvin temp-area">
          <label for="kelvin">Kelvin</label>
          <div class="temp-inputs">
            <input
              type="number"
              id="kelvin"
              placeholder="Valor em Kelvin"
              v-model="tempK"
              @change="conversor(srcK, tempK)"
            />
          <input type="button" value="+" id="increaseK" class="increase-button" @click="increaseKelvin()" />
          <input type="button" value="–" id="decreaseK" class="decrease-button" @click="decreaseKelvin()" />
        </div>
      </div>
    <div id="buttonArea">
      <button id="botao" @click="conversor(srcT, tempT)">Converter</button>
    </div>
    </div>
  </main>
</template>

<style lang="sass" scoped>
.temp-area
  margin: 2vh auto auto auto
  width: 80%

.temp-inputs
  display: flex
  flex-direction: row
  justify-content: center

.increase-button
  border-radius: 0px
  border-right-style: none
  font-weight: bold

.decrease-button
  border-radius: 0 4px 4px 0
  font-weight: bold

.increase-button, .decrease-button
  width: 14%

#buttonArea
  display: flex
  justify-content: center
  margin: 2pc auto auto auto

#botao
  background-color: #f3f2f2
  border: 1px solid #ddc9cf 
  border-radius: 10px
  font-size: 16pt
  font-weight: bold
  padding: 10px
  cursor: pointer
  display: inherit
  justify-content: inherit
  margin-top: 4vh
  @apply bg-rose-50 dark:bg-stone-500

#fahrenheit, #celsius, #kelvin
  border-radius: 4px 0 0 4px

</style>