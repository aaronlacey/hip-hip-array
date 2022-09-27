const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

symmetricalCapitals.shift("A")
  symmetricalCapitals.shift("H")
  symmetricalCapitals.pop("Y")
 console.log(symmetricalCapitals)

i = 0 

while(i < symmetricalCapitals.length){
  console.log(symmetricalCapitals[i]);
  i++
}