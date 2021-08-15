/** Find pour trouver la valeur du tableau donc l'id est égal à 2 */
function exercice3(arr) {
  return arr.find((currentValue) => currentValue.id === 2);
}

/* Résultat attendu =
  {
    id: 2,
    type: "house"
  },
*/

console.log(
  exercice3([
    { id: 1, type: "house" },
    { id: 2, type: "house" },
    { id: 3, type: "destination" },
    { id: 4, type: "house" },
    { id: 5, type: "destination" },
  ])
);
