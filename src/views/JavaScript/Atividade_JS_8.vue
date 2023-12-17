<script lang="ts" setup>
let studentList = [
  {
    id: 0,
    name: "",
    grade1: 0,
    grade2: 0,
    average: 0,
    freq: 0,
    approved: false,
  },
];
let count = 1;

const avg = (g1: number, g2: number) => (g1 + g2) / 2;

studentList = [
  {
    id: 0,
    name: "",
    grade1: 0,
    grade2: 0,
    average: 0,
    freq: 0,
    approved: false,
  },
];

while (true) {
  let nameValue = String(prompt(`Insira o nome do ${count}º aluno.`));
  let grade1Value = Number(prompt("Insira a nota do primeiro semestre."));
  let grade2Value = Number(prompt("Insira a nota do segundo semestre."));
  let avgValue = avg(grade1Value, grade2Value);
  let freqValue = Number(prompt("Insira a frequência."));

  studentList.push({
    id: count,
    name: nameValue,
    grade1: grade1Value,
    grade2: grade2Value,
    average: avgValue,
    freq: freqValue,
    approved: false,
  });

  if (avgValue >= 7 && freqValue >= 70) {
    studentList[count].approved = true;
  }

  studentList[1].name == "null"
    ? studentList.pop()
    : console.log("Aluno adicionado");

  if (!confirm("Deseja adicionar mais um aluno?")) {
    break;
  }
  count++;
}
</script>

<template>
  <main>
    <div class="main-area">
      <h1>Boletim</h1>
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
            v-for="student in studentList"
            :class="`${
              student.approved
                ? 'bg-[#9edb9e] !text-[#0f0a0a]'
                : 'bg-[#df9f9f] !text-[#180101]'
            }`"
          >
            <td>
              {{ student.id }}
            </td>
            <td>
              {{ student.name }}
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
  tbody {
    tr:nth-child(1) {
      display: none;
    }

    tr.approved-student {
      background-color: #9edb9e;
      color: #0f0a0a !important;
    }
    tr.disapproved-student {
      background-color: #df9f9f;
      color: #180101 !important;
    }
  }
}
</style>
