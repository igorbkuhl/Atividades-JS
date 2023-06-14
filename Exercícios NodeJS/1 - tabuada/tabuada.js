'use strict';

/* 

1   2   3   4   ... 10
2   4   6   8   ... 20
....
10  20  30  40  ... 100

*/

let tabuada = [];

for(let i = 0; i < 10; i++) {
    
    let linha = [];

    for(let j = 0; j < 10; j++) {
        linha.push((i + 1) * (j + 1));
    }
    tabuada.push(linha);
}

for(let i = 0; i < tabuada.length; i++) {
    
    let linha = tabuada[i];

    for(let j = 0; j < tabuada.length; j++) {
        let value = linha[j];
        process.stdout.write(value.toString());
        process.stdout.write('\t');
    }

    console.log();
}