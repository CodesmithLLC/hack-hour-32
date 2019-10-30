/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 //check for negatives as well
function highestProduct(array) {

    let countNegatives=0; //must be 2 to be highest product

    if(array===undefined || array.length===0){
        return;
    }
    //might be a fraction? for now we don't manage fractions...
    if(array.length===1){
        return array[0];
    }
    else if(array.length===2){
        return array[0]*array[1];
    }
    else if(array.length===3){
        return array[0]*array[2]*array[3];
    }

    //array length greater than 3
    let result=array[0]*array[1]*array[2];//must be at least length
    console.log("result "+result);
    let minIndex=0;
    let indexes=[0,1,2];
    if(array[0]<0){ countNegatives++;}
    if(array[1]<array[2] && array[1]<array[0]){ minIndex=1;}
    if(array[2]<array[1] && array[2]<array[0]){ minIndex=2;}
    if(array[1]<0){ countNegatives++;}
    if(array[2]<0){ countNegatives++;}
    console.log(countNegatives);
    console.log(result);
    console.log(minIndex);
    console.log(indexes);
    for(let i=3;i<array.length;i++){
        let current=array[i];
        //if the element is greater than any of the current indexed elements, the product will be greater
      

        //replace with the min if it is greater, otherwise leave unchanged
        if(current>array[minIndex]){
            console.log("about to replace i ="+i);
            let positionIndex=indexes.indexOf(minIndex); //0, 1 or 2, the array that holds the master indices of the 3 elements 
            result/=array[minIndex];//divide out and replace
            result*=array[i];

            indexes[positionIndex]=i;//unreferences old and reassigns it

            console.log("indexes"+indexes);//indexes of the main legit indexes of array that contain the master factors

            //now we must check everythign again or the min index and reassign thtrough if statemnets

            minIndex=0; //the position indexes array stores the legit index that contains the min element with respect to the other three, not factoring in negatives yet.....
            if(array[indexes[1]]<array[indexes[2]] && array[indexes[1]]<array[indexes[0]]){ minIndex=1;}
    if(array[indexes[2]]<array[indexes[1]] && array[indexes[2]]<array[indexes[0]]){ minIndex=2;}
    console.log("min index "+minIndex);
            //reassign min
        }
      
      
        if(countNegatives===2){
            //we have two negatives making a positive, so we may want to check for more negative number to replace 
        }



        //sub in conditionals for negative, countnegative changes once we compare product
    }


    return result;
}


module.exports = highestProduct;



console.log(highestProduct([1,2,3,4,5,1]));