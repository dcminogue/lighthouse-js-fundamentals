const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const judgeVegetable = function(array, metric) {
  let value = 0;
  let subName;
  array.forEach(veg => {
    if(veg[metric] > value){
      value = veg[metric]
      subName = veg.submitter
    } 
  }) 
return subName
}

console.log(judgeVegetable(vegetables, "redness"));
console.log(judgeVegetable(vegetables, "plumpness"));