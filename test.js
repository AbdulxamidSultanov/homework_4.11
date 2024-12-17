const arrRandomNumber = (arr) => {
    let array = new Array(arr);

    for (let i = 0; i < arr; i++) {
        array[i] = (Math.trunc(Math.random() * 200 - 100))
    }
    return array

}
const str5 = "Salom dunyo!"
const arr15 = str5.split("")
let lastThreeIndex = arr15.length - 3
let res15 = str5.slice(lastThreeIndex, arr15.length)
console.log(res15)