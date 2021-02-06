const naruto = { name: "naruto", vida: 600, damage: 110 };
const sasuke = { name: "sasuke", vida: 620, damage: 100 };
const sakura = { name: "sakura", vida: 300, damage: 50 };
const kakashi = { name: "kakashi", vida: 700, damage: 210 };
const gai = { name: "gai", vida: 720, damage: 200 };
const itachi = { name: "itachi", vida: 700, damage: 150 };
batalha(sasuke, naruto);
function batalha(ninja1, ninja2) {
  const itachin1 = ninja1.name === "itachi";
  const itachin2 = ninja2.name === "itachi";
  if (itachin1 || itachin2 === true) {
    console.log(`Você é um bom oponente porém contra o Itachi ninguém pode`);
  } else {
    vidan2 = ninja2.vida - ninja1.damage;
    vidan1 = ninja1.vida - ninja2.damage;
    if (vidan2 > vidan1) {
      console.log(`${ninja2.name} venceu esse duelo`);
    } else if (vidan2 === vidan1) {
      console.log(`Há um empate entre ${ninja1.name} e ${ninja2.name}`);
    } else {
      console.log(`${ninja1.name} venceu esse duelo`);
    }
  }
}
