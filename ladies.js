const ladies = [
  ['Angie Harmon', 72, 'actress'],
  ['Jennifer Lopez', 68, 'singer'],
  ['Shakira Shakira', 64, 'dancer']
]

const singleLadies = function (ladies) {
  const goodLadies = [];
  for (const lady of ladies)
  if (lady[1] >= 65 && (lady[2] === 'actress' || lady[2] === 'singer')) {
    goodLadies.push(lady[0])
  }
  return goodLadies;
}
console.log(singleLadies(ladies))

