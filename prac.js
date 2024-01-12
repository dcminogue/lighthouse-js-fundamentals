let f = "Loopy";
let b = "Lighthouse";
for (let i = 100; i < 201; i++) {
  if (i % 3 == 0 && i % 4 == 0 ) {
    console.log(f + b);
  }
  else if (i % 3 == 0) {
    console.log( f )
  }
  else if (i % 4 == 0) {
    console.log( b )
  }
  else {
    console.log(i)
  }
}
  








