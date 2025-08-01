/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule 
    e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 4;
const nota2 = 4;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;

console.log(`Média: ${media.toFixed(2)}`);

if (media < 5) {
    console.log('Reprovação');
} else if (media > 7) {
    console.log('Passou de semestre');
} else {
    console.log('Recuperação');
} 