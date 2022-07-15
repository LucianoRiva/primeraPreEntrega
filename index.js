function mensaje(){
  let nombre = prompt("Ingrese su nombre de usuario de sistema de stock");
  let resultado = `Hola cómo estás ${nombre}`;
  alert(resultado);
}


//Articulos a comercializar
const articles = ["Cemento", "arena de roca", "arena del lago", "piedra bocha"];
console.log(articles);

//sumando un articulo
articles.push("Tierra negra");
console.log(articles);

//quitando un articulo
articles.pop();
console.log(articles);


//Productos con su sku de referencia en sistema de stock
const productos = [
  { id: 1, nombre: "Cemento", sku: 1100 },
  { id: 2, nombre: "Arena de roca", sku: 1160 },
  { id: 3, nombre: "Arena del lago", sku: 1600 },
  { id: 4, nombre: "Piedra bocha", sku: 2300 },
  { id: 5, nombre: "Tierra negra", sku: 1300 },
];
//Verificacion de elemento
console.log(productos.some(elemento => elemento.nombre === "Piedra bocha"));


//Armamos productos con su SKU al lado
let total = productos.reduce((acumulador, elemento) => acumulador + " " + elemento.nombre + " " + elemento.sku, " ");
console.log(total);
function suma(x, y){
  console.log(x + y);
}

//Buscador de elemento con includes
const arr1 = ["Cemento", "Arena de roca", "Arena del lago", "Piedra bocha", "Tierra negra"];

console.log(arr1.includes("Piedra bocha"));

