const a = 4
const b = 6
const c = 2
const adicao = a + b
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b
const raizquadrada_a = Math.sqrt(a)
const raizquadrada_b = Math.sqrt(b)
const a_aocubo = a ** 3
const b_aocubo = b ** 3
const delta = Math.sqrt((b ** 2) - 4 * a * c)
const x =  ((-b) + delta) / (2 * a)
const x_linha = ((-b) - delta) / (2 * a)
console.log(`A soma, subtracao, multiplicacao e divisao desses dois números é igual a ,respectivamente, :${adicao} ${subtracao} ${multiplicacao} ${divisao.toFixed(2)}`)
console.log(`A raiz quadrada de 'a' é igual a ${raizquadrada_a.toFixed(2)} e a raiz quadrada de 'b' é igual a ${raizquadrada_b.toFixed(2)}`)
console.log(`Os valores de 'a' e 'b' ao cubo são, respectivamente, ${a_aocubo} e ${b_aocubo}`)
console.log(`Os valores de 'x' e " x' " são, respectivamente, ${x} e ${x_linha}`)
