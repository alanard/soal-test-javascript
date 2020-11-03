// Diberikan 3 variable, yaitu x,y,z. Yang mana x=1, y=2, z=3
// Buat isi dari variable tersebut menjadi terbalik yaitu x=3, y=2, z=1

let x = 1
let y = 2
let z = 3
console.log('nilai awal x : ', x)
console.log('nilai awal y : ', y)
console.log('nilai awal z : ', z)
console.log('\n');

let temp = x
x = z
z = y
z = temp


console.log('nilai awal x : ', x)
console.log('nilai awal y : ', y)
console.log('nilai awal z : ', z)