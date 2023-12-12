<script lang="ts" setup>
let studentList = [
  {
    id: 0,
    label: "",
    grade1: 0,
    grade2: 0,
    average: 0,
    freq: 0,
  },
];
let count = 1;

const avg = (g1: number, g2: number) => (g1 + g2) / 2;

function signup() {
  studentList = [
    {
      id: 0,
      label: "",
      grade1: 0,
      grade2: 0,
      average: 0,
      freq: 0,
    },
  ];

  while (true) {
    let labelValue = String(prompt(`Insira o nome do ${count}º aluno.`));
    let grade1Value = Number(prompt("Insira a nota do primeiro semestre."));
    let grade2Value = Number(prompt("Insira a nota do segundo semestre."));

    studentList.push({
      id: count,
      label: labelValue,
      grade1: grade1Value,
      grade2: grade2Value,
      average: avg(grade1Value, grade2Value),
      freq: Number(prompt("Insira a frequência.")),
    });
    if (!confirm("Deseja adicionar mais um aluno?")) {
      break;
    }
    count++;
  }
}
</script>

<template>
  <main>
    <div class="main-area">
      <h1 @click="signup">Boletim</h1>
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
          <tr v-for="student in studentList">
            <td>
              {{ student.id }}
            </td>
            <td>
              {{ student.label }}
            </td>
            <td>
              {{ student.grade1 }}
            </td>
            <td>
              {{ student.grade2 }}
            </td>
            <td>
              {{ student.average }}
            </td>
            <td>
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
  }
  thead tr th:nth-child(1) {
    width: 2em;
  }
  tbody tr:nth-child(1) {
    display: none;
  }
}
</style>
