const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

alunos.push('Rafael'); // Adiciona Rafael ao final do array
alunos[5] = 'Lucas'; // Adiciona Lucas na posição 5
alunos.push(100); // Adiciona o número 100 ao final do array 
console.log(alunos[0]); // Exibe o primeiro elemento do array
console.log(alunos);

alunos.pop(); // Remove o último elemento do array
console.log(alunos);

alunos.shift(); // Remove o primeiro elemento do array
console.log(alunos);
