/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let result=false;
    //mode is frequency of occurences
    if(array===undefined || array.length===0){
        result=false;
        return result;
    }
    if(array.length===1){
        result=true;
        return result;
    }
    let mode=1;
    let modeElement=array[0];
    let sum;
    let mean;

    for(let i=0;i<array.length;i++){
        let el=array[i];
        sum+=array[i];
        //nest to check mode of each
        let count=1;
        //counts the frequency of el
        for(let j=i;j<array.length;j++){
            //we do not need to recount begining so we start at i to shorten the circuit
            if(array[j]===el){count++};
            //another idea is to use the strin and remove chars and compare the lenghts
        }
        if(count>mode){
            modeElement=el;
            mode=count;
        }

    }
    mean=sum/array.length;

    if(modeElement===mean){
        result=true;
        return result;
    }


    return result;
}

module.exports = modemean;
