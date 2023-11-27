<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      boxes: [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
      ],
      isShuffled: false,
    };
  },
  methods: {
    shuffle() {
      const index: number = Math.floor(Math.random() * this.boxes.length);
      const randomElement = this.boxes[index];
      this.boxes[index].status = !this.boxes[index].status;
      this.isShuffled = true;
      return randomElement;
    },
    restart() {
      for (let i = 0; i < this.boxes.length; i++) {
        this.boxes[i].status = false;
      }
      this.isShuffled = false;
    }
  },
});
</script>

<template>
  <main>
    <div class="main-area">
      <div id="boxArea">
        <div
          class="box bg-red-500"
          :class="{ winner: boxes[0].status }"
        ></div>
        <div
          class="box bg-green-400"
          :class="{ winner: boxes[1].status }"
        ></div>
        <div
          class="box bg-blue-500"
          :class="{ winner: boxes[2].status }"></div>
        <div
          class="box bg-yellow-400"
          :class="{ winner: boxes[3].status }"
        ></div>
        <div
          class="box bg-pink-500"
          :class="{ winner: boxes[4].status }"
        ></div>
      </div>
      <div id="buttonArea">
        <button
          id="shuffleButton"
          class="bg-rose-200 dark:bg-rose-900"
          :class="{ hidden: isShuffled }"
          @click="shuffle"
        >
          Sortear
        </button>
        <button
          id="restartButton"
          class="bg-rose-200 dark:bg-rose-900"
          :class="{ hidden: !isShuffled }"
          @click="restart"
        >
          Sortear novamente
        </button>
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
      margin: 15px;
      height: 100px;
      width: 200px;
    }
  }
  .winner {
    background-color: #f8f8ff;
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
