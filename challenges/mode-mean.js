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
//mode => most number in an array
//mean => average number in an array
// console.log(Object.assign({}, [1,2,3,4,2]))

// function modemean(array){
//     let mean = 0;
//     for (let i=0; i<array.length; i++){
//         mean += array[i];
//     }
//     mean = Math.floor(mean / array.length)

//     let mode ={}
//     for (let j=0; j<array.length; j++){
//         if (!mode[array[j]]){
//             mode[array[j]] = 1
//         }else{
//             mode[array[j]]++
//         }
//     }

//     let modeHigh = 0;
//     for (let key in mode){

//     }
// }












function modemean(array){
    //mean
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    let mean = Math.floor(sum/array.length);

    //mode
    let obj = {};
    for(let i=0; i<array.length; i++){
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++;
        }
    }
    //check the mode object
    let maxCount = 0;
    let mode;
    for (let j in obj) {
        if (obj[j] > maxCount) {
            maxCount = obj[j];
            mode = j;
        } else if (obj[j] === maxCount) {
            //maxCount = Math.max(maxCount, obj[j]); //mode = the key of Math.max(maxCount, obj[j])
            mode = Math.max(j,mode);
        }
    }
    console.log("mode ", mode)
    console.log("mean ", mean)
    //see if they are equal
    if (mode === mean) {
        return true;
    } else {
        return false;
    }
}
console.log(modemean([1,2,3,2,1]));








// function modemean(array) {
//     function mode(array){
//         let arr = [];
//         for (let i=0; i<array.length; i++){
//             for (let j=i+1; j<array.length; j++){
//                 if (array[i] === array[j]){
//                     arr.push(array[i]);
//                 }
//             }
//         }
//         return Math.max(...arr);
//     }
//     function mean(array){
//         let addByEveryNumber = 0;
//         for (let i=0; i<array.length; i++){
//             addByEveryNumber += array[i]
//         }
//         addByEveryNumber = Math.floor(addByEveryNumber / array.length)
//         return addByEveryNumber
//     }
// }

// console.log(modemean([1,2,3,4,2]))
// //mode most number
// function modemean(array){
//     const obj = {};
//     for(let i=0; i<array.length; i++){
//         if (!obj[array[i]]){
//             obj[array[i]] = 1;
//         }else{
//             obj[array[i]]++
//         }
//     }
//     // let objVal = Object.values(obj);
//     // const allCount = Object.entries(obj);
//     // const reduce = allCount.reduce((acc,cur)=>{
        
//     // },[0,0])
//     // console.log(Object.entries(obj))
//     // console.log(Object.keys(obj))
//     // console.log(Object.values(obj))
//     // return obj
// }
// // function modemean(array){
// //     return array.reduce((acc,cur)=>{

// //     },{})
// // }
// // console.log(modemean([1,2,3,4,2]))
// module.exports = modemean;
