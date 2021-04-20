let bla = "9=6,$9>@.#941^g1".match(/\d+/g).join("").length;
let bla2 = "9=6,$9>@.#941^g1".match(/[\!@#$%\^&\*\(\)\{\}\[\]=<>\/,\.]/g).length

console.log(bla2)