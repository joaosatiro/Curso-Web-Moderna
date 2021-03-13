const times = new Set()
times.add('Corinthians')
times.add('São Paulo').add('Palmeiras').add('Santos')
times.add('Santos') // vai ignorar pq já foi adicionado

console.log(times)
console.log(times.size)
console.log(times.has('corinthians'))
console.log(times.has('Corinthians'))
times.delete('Palmeiras')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)