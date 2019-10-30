const reverseInPlaceWithTemp = array => {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
};

const reverseInPlace = array => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]];
  }
  return array;
};