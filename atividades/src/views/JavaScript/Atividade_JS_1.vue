<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
  name: "Atividade JS 1",
  data() {
    return {
			// source: String,
			// valNum: Number,
			tempF: 0,
			tempC: 0,
			tempK: 0,
    }
		// type inputTypes = {
		// 	id: string;
		// 	value: number;
		// }
  },
	methods: {
		conversor(source: string, valNum: number) {
			let fahrenheit = (document.querySelector("input#fahrenheit") as HTMLInputElement).value;
			let celsius = (document.querySelector("input#celsius") as HTMLInputElement).value;
			let kelvin = (document.querySelector("input#kelvin") as HTMLInputElement).value;
			this.tempF = Number(fahrenheit);
			this.tempC = Number(celsius);
			this.tempK = Number(kelvin);

			if (source == "fahrenheit") {
				this.tempC = ((valNum - 32) / 1.8);
				this.tempK = (((valNum - 32) / 1.8) + 273.15);
			} 
			
			if (source == "celsius") {
				this.tempF = ((valNum * 1.8) + 32);
				this.tempK = ((valNum) + 273.15);
			}

			if (source = "kelvin") {
				this.tempF = (((valNum - 273.15) * 1.8) + 32);
				this.tempC = ((valNum) - 273.15);
			}
		}
	}
})
</script>

<template>
  <main id="temp-converter">
    <div id="formArea">
      <h1>Conversor de temperaturas</h1>
        <form action="#" method="get">
          <div class="fahrenheit temp-area">
            <label for="fahrenheit">Fahrenheit</label>
            <input
            type="number"
            id="fahrenheit"
            placeholder="Valor em Fahrenheit"
            v-model="tempF"
            @change="conversor(this.id, this.value)"/> 
          </div>
          <br/>
          <div class="celsius temp-area">
            <label for="celsius">Celsius</label>
              <input
              type="number"
              id="celsius"
              placeholder="Valor em Celsius"
              v-model="tempC"
              @change="conversor(this.id, this.value)"/>
          </div>
          <br/>
          <div class="kelvin temp-area">
              <label for="kelvin">Kelvin</label>
              <input
              type="number"
              id="kelvin"
              placeholder="Valor em Kelvin"
              v-model="tempK"
              @change="conversor(this.id, this.value)"/>
          </div>
        </form>
    </div>
    <div id="buttonArea">
      <button id="botao" @click="conversor(source, valNum)">Converter</button>
    </div>
  </main>
</template>

<style lang="sass" scoped>
*
  color: #f39ba3

html
  display: flex
  flex-direction: column
  flex-wrap: wrap

body
  margin-top: 20vh
  margin-bottom: auto
  margin-right: auto
  margin-left: auto
  padding: auto

main
  display: flex
  justify-content: center
  flex-direction: column
  background-color: #513340
  padding: 8vh 0px

h1
  font-family: 'Courier New', Courier, monospace
  font-size: 1.5em
  font-weight: bold
  text-align: center
  text-transform: uppercase

form
  display: grid
  justify-content: space-around
  margin: 0
  width: 600px

label
  font-family: 'Courier New', Courier, monospace
  font-size: 0.9em
  font-style: italic

input
  background-color: #946064
  border: solid 1px
  border-radius: 5px
  padding: 5px 15px
  text-align: center
  width: 80%

.temp-area
  margin-top: 2vh

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

::placeholder
  color: #f39ba3

::selection
  background-color: #f39ba2a4
  color: #f0839acb
</style>