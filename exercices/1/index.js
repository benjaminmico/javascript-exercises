/** Reduce pour accumuler les valeurs du tableau et retourner la somme  */
function exercice1(arr) {
  return arr.reduce((previousSum, currentValue) => previousSum + currentValue);
}
// Résultat attendu = 31
console.log(exercice1([1, 2, 3, 4, 10, 11]));

// Résultat attendu = 5789
console.log(exercice1([338, 65, 713, 595, 428, 610, 728, 573, 871, 868]));

// Résultat attendu = 20966
console.log(
  exercice1([
    456, 124, 752, 746, 782, 492, 741, 171, 752, 295, 2, 56, 725, 961, 135, 654,
    697, 328, 112, 992, 922, 816, 519, 997, 751, 268, 378, 276, 209, 842, 805,
    348, 587, 105, 61, 449, 590, 616, 442, 347, 665,
  ])
);
