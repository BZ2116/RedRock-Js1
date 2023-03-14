// Array.prototype.map=function(fn){
//     let arrnew=[]
// for(i=0;i<Array.length;i++){
//     fn(Array[i])
// arrnew=Array[i]
// }
// return arrnew


// }

// let plus=function(x){
// x*=2
// }

// for(let i=0;i<5;i++){

// console.log(arr.map(plus))

// }

let allArr=[1,2,3,4,5,6]



// map  遍历 方法 
function map(arr, callback) {
    //首先检查一下参数
    let flag = !Array.isArray(arr) || !arr.length || typeof callback !== 'function'
    if (flag) {
        return []
    } else {
        //每次调用我们都会返回一个新数组
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = callback(arr[i], i, arr)
        }
        return newArr
    }
}

console.log(map(allArr, (item) => item + 1))


// filter 过滤器  方法
function filter(arr, callback) {
    let flag = !Array.isArray(arr) || !arr.length || typeof callback !== 'function'
    if (flag) {
        return []
    } else {
        let newArr = []
        for (let index = 0; index < arr.length; index++) {
            if (callback(arr[index], index, arr)) {
                newArr.push(arr[index])
            }

        }
        return newArr
    }

}
console.log(filter(allArr, (item) => item > 2))



// reduce 累加  方法
function reduce(arr, callback, initValue) {
    let flag = !Array.isArray(arr) || !arr.length || typeof callback !== 'function'
    if (flag) {
        return []
    } else {
        //  判断有没有初始值
        let isValue = initValue === 0 ? (!initValue) : (!!initValue)
        let reduceValue = isValue ? initValue : arr[0]
        //  判断其实相加的值
        for (let index = isValue ? 0 : 1; index < arr.length; index++) {
            reduceValue = callback(reduceValue, arr[index], index, arr)
        }
        return reduceValue
    }
}
console.log(reduce(allArr, (x, y) => x + y)) 