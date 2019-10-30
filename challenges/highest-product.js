/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    let new_arr =array.sort();
    let product = 1;
    if(new_arr.length == 3){
      product = new_arr[new_arr.length-1]*new_arr[new_arr.length-2]*new_arr[new_arr.length-3];
         console.log('execute oth');
        return product;
    }
     else if(new_arr[0]*new_arr[1] > new_arr[new_arr.length-1]*new_arr[new_arr.length-2]){
         product = new_arr[0]*new_arr[1] *new_arr[new_arr.length-1];
         console.log('execute 1st')
         return product;
    }
    else{
        product = new_arr[new_arr.length-1]*new_arr[new_arr.length-2]*new_arr[new_arr.length-3];
         console.log('execute here');
        return product;
    }

}


module.exports = highestProduct;
