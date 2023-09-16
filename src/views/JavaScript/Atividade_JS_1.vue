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
			let kelvin = (document.querySelector("input#kelvin") as HTMLInputElement).value;
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
  // fahrenheitInput(): void {
  //   this.srcT = "fahrenheit"
  // },
  // cesiusInput(): void {
  //   this.srcT = "celsius"
  // },
  // kelvinInput(): void {
  //   this.srcT = "kelvin"
  // }
})
</script>

<template>
  <main id="temp-converter">
    <div id="formArea">
      <h1>Conversor de temperaturas</h1>
        <form action="#" method="get">
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
              <input type="button" value="-" id="decreaseF" class="decrease-button" @click="decreaseFahrenheit()" />
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
              <input type="button" value="-" id="decreaseC" class="decrease-button" @click="decreaseCelsius()" />
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
              <input type="button" value="-" id="decreaseK" class="decrease-button" @click="decreaseKelvin()" />
            </div>
          </div>
        </form>
    </div>
    <div id="buttonArea">
      <button id="botao" @click="conversor(srcT, tempT)">Converter</button>
    </div>
  </main>
</template>

<style lang="sass" scoped>
*
  color: #f39ba3

body
  margin: 20vh auto auto auto
  padding: auto

main
  background-color: #513340
  display: flex
  justify-content: center
  flex-direction: column
  padding: 8vh 0px
  height: 100vh

h1
  font-family: 'Courier New', Courier, monospace
  font-size: 1.5em
  font-weight: bold
  text-align: center
  text-transform: uppercase

form
  margin: auto
  width: 16pc

label
  font-family: 'Courier New', Courier, monospace
  font-size: 0.9em
  font-style: italic

input
  background-color: #946064
  border: solid 1px
  border-radius: 5px
  padding: 8px 15px
  text-align: center
  width: 80%

input[type="number"]
  appearance: textfield

.temp-area
  margin-top: 2vh

.temp-inputs
  display: flex
  flex-direction: row

.increase-button
  border-radius: 0px

.decrease-button
  border-radius: 0 4px 4px 0

.increase-button, .decrease-button
  width: 14%

#buttonArea
  display: flex
  justify-content: center
  margin: auto

#botao
  background-color: #946064
  border: 1px solid
  border-radius: 4px
  font-size: 18px
  padding: 10px
  cursor: pointer
  display: inherit
  justify-content: inherit
  margin-top: 4vh

#fahrenheit, #celsius, #kelvin
  border-radius: 4px 0 0 4px

::placeholder
  color: #f39ba3

::selection
  background-color: #f39ba2a4
  color: #f0839acb
</style>