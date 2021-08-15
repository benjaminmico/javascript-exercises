/** Filter pour trouver les valeurs du tableau donc le type est égal à "house" */
function exercice2(arr) {
  return arr.filter((currentValue) => currentValue.type === "house");
}

/* Résultat attendu =
[
  { id: 1, type: "house" },
  { id: 2, type: "house" },
  { id: 4, type: "house" },
];
*/

console.log(
  exercice2([
    { id: 1, type: "house" },
    { id: 2, type: "house" },
    { id: 3, type: "destination" },
    { id: 4, type: "house" },
    { id: 5, type: "destination" },
  ])
);
