<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  /*props: {
    students: {
      studentId: Number,
      label: String,
      grade1: Number,
      grade2: Number,
      average: Number,
      freq: Number,
    },
    counter: Number,
    approved: Boolean,
  },
  data() {
    return {
      studentList: [],
      counter: 0,
      approved: false,
    }
  },*/
  methods: {
    start() {
      while (true) {
        let counter = 0;
        let approved = false;

        let studentList = {
          studentId: counter + 1,
          label: prompt(`Insira o nome do ${counter + 1}º aluno.`)?.toString(),
          grade1: parseFloat(prompt("Insira a nota do primeiro semestre.")),
          grade2: parseFloat(prompt("Insira a nota do segundo semestre.")),
          average: ((grade1) + (grade2)) / 2,
          freq: parseFloat(prompt("Insira a frequência.")),
        };
        counter++;
        console.log(studentList);
        return studentList;
      };
    },
   },
});
</script>

<template>
<main>
  <div class="main-area">
    <h1 @click="start">Boletim</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>1º Semestre</th>
          <th>2º Semestre</th>
          <th>Nota Final</th>
          <th>Frequência</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="student in start"
        >
          <td :key="student.studentId">            
            {{ student.studentId }}
          </td>
          <td :name="student.label">
            {{ student.label }}
          </td>
          <td :grade1="student.grade1">
            {{ student.grade1 }}
          </td>
          <td :grade2="student.grade2">
            {{ student.grade2 }}
          </td>
          <td :average="student.average">
            {{ student.average }}
          </td>
          <td :freq="student.freq">
            {{ student.freq }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
</template>

<style lang="scss" scoped>
.main-area {
  width: 35em;

  h1 {
    text-align: center;
  }

  table * {
    border: #000 1px solid;
    padding: 2px;
    text-align: center;

    &:nth-child(1) {
      width: 2em;
    }
  }
}
</style>
