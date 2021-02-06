const nameG = 'gabrielzinho'
let pontosG = 0
const nameL = 'lucca'
let pontosL = 0
const nameM = 'mirtuoc'
let pontosM = 0
function pontuacaoFinal (pontosDoJogador, valor){
    pontosDoJogador += valor
    return pontosDoJogador
}
let pontuacaoG = pontuacaoFinal (pontosG, 10)
let pontuacaoL = pontuacaoFinal (pontosL, 20)
let pontuacaoM = pontuacaoFinal (pontosM, 30)
console.log(pontuacaoG, pontuacaoL, pontuacaoM)
