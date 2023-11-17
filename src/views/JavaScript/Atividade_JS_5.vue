<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      boxes: [
        { redId: "1" },
        { greenId: "2" },
        { blueId: "3" },
        { yellowId: "4" },
        { pinkId: "5" },
      ],
      chosenBox: "",
    };
  },
  methods: {
    randomIndex(index: string) {
      index[Math.floor(Math.random() * this.boxes.length)];
      const randomElement = this.boxes[index];
      this.chosenBox = randomElement;
      return randomElement;
    },
    shuffle() {
      this.randomIndex(boxes)
    }
  },
});

// const randomIndex = (index:any) => index[Math.floor(Math.random() * boxes.length)]

// const shuffle = () => randomIndex(boxes).style.borderColor = "#ffffff solid 5px";
</script>

<template>
  <main>
    <div class="main-area">
      <div id="boxArea">
        <div :key="boxes[0].redId" class="box bg-red-500"></div>
        <div :key="boxes[1].greenId" class="box bg-green-400"></div>
        <div :key="boxes[2].blueId" class="box bg-blue-500"></div>
        <div :key="boxes[3].yellowId" class="box bg-yellow-400"></div>
        <div :key="boxes[4].pinkId" class="box bg-pink-500"></div>
      </div>
      <div id="buttonArea">
        <button
          id="shuffleButton"
          class="bg-rose-200 dark:bg-rose-900"
          @click="randomIndex"
        >
          Sortear
        </button>
        <button id="restartButton" class="hidden">Sortear novamente</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-area {
  height: 35pc;
  width: 50pc;

  #boxArea {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    .box {
      border: 3px solid;
      border-radius: 10px;
      // cursor: pointer;
      margin: 15px;
      height: 100px;
      width: 200px;
    }
  }

  .is-active {
    opacity: 1;
  }

  .false {
    opacity: 0;
  }

  #buttonArea {
    align-content: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 5vh;

    button {
      border-radius: 10px;
      cursor: pointer;
      font-size: 24px;
      padding: 20px;
    }
  }
}
</style>
