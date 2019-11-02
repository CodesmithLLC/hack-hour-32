function binToDec(binary) {
    // turn the string into an array
   const binArray = binary.split('');
   // reverse it
   binArray.reverse();
   // reduce the value by accumulating the sum of powers of two
   return binArray.reduce(function(acc, actual, index){
       acc = acc + actual*Math.pow(2,index);
       return acc;
   }, 0)
}


//EXTENSIONS

//Solution one, reversed math

function decToBin(decimal) {
    // initialize a binary array
    const binArray = [];
    // while decimal is greater then zero
    while(decimal > 0){
        // calculate the remainder of the division by two
        let remainder = decimal%2;
        // push the remainder to the array
        binArray.push(remainder);
        // update decimal to the florred value of its division by two
        decimal = Math.floor(decimal/2);
    }
    // reverse the array
    binArray.reverse();
    // add a leading zero for binaries that are shorter than 4 digits or have an odd length
    while(binArray.length < 4 || binArray.length%2 !== 0) binArray.unshift(0);
    // join it back into a string
    return binArray.join('');
}

// Solution two

function decToBin(decimal) {
  let dec = decimal;
  let bin = '';
  let binSpaces = Math.floor(Math.log2(dec));
  while (binSpaces >= 0){
    let temp = Math.pow(2, binSpaces);
    if (dec == temp) {
      bin += '1' + '0'.repeat(binSpaces);
      return bin;
    }
    if (dec > temp) {
      bin += '1';
      dec -= temp;
    } else bin+='0';
    binSpaces--;
  }
  return bin;
}