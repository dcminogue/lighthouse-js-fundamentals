const moves = [ 'north', 'north', 'west', 'west', 'north', 'east', 'north', 'south', 'north', 'east', 'north', 'south', 'south', 'south', 'south', 'south']


const finalPosition = function (moves) {
  const position = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      position[1]++
    }
    if (move === 'south') {
      position[1]--
    }
    if (move === 'east') {
      position[0]++
    }
    if (move === 'west') {
      position[0]--
    }
    

  }
  
  return position;
}

console.log(finalPosition(moves))