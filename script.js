function searchOptimalSolution(backpackCapacity, valueWeightArr) {
  let sourceArr = [...valueWeightArr];
  let resultArr = [];

  sourceArr.map((item) => item.specificValue = item.weight / item.value);

  let currentSum = 0;

  for (let i = 0; i < sourceArr.length; i++) {
    if (currentSum + sourceArr[i].specificValue <= backpackCapacity) {
      currentSum += sourceArr[i].weight;
      resultArr.push(sourceArr[i]);
    } else break;
  }

  return resultArr;
}

console.log(searchOptimalSolution(15, [
  {value: 4, weight: 12},
  {value: 2, weight: 2},
  {value: 1, weight: 1},
  {value: 10, weight: 4},
  {value: 2, weight: 1}
]));