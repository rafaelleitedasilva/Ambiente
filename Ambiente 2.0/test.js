function redistributeWealth(wealth) {
  let array = wealth;let us = 0;for(let a = 0; a<array.length; a++){us = us + array[a]}
  for(let a = 0; a<array.length; a++){array[a] = us/array.length}
}
redistributeWealth([2,3,5])