const funcionario = { nome: 'Maria', salaraio: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)