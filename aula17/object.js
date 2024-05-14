let amigo = {nome: 'Jose',
 sexo: 'M',
 peso: 85.8,
engordar(p=0){
  this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)



let alunos = { nome: 'Pedro', nota: 10.5, escola: 'E.E.Emilia', aumentar(p = 0){
  this.nota += p
}}
alunos.aumentar(20)
console.log(alunos.nota)
