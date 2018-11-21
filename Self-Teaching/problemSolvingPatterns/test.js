function charCount(str) {
    let newStr = str.replace(/\s+/g, "",);
    let obj = {}
    for (let char of newStr){
       char.toLowerCase()
        if (obj[char] > 0) {
            obj[char]++
           
        }
        else {
            obj[char] = 1
        }
    }
    return obj
}
console.log(charCount("hi hi, there"))