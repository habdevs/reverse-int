module.exports = function reverse(n) {

    const str = String(n);
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return parseFloat(newStr)


    // const str = String(n);
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i]
    // }

    // console.log(reverse(100));


    // const result = str.split('').reverse('').join('');
    // return parseFloat(result);




    // return parseFloat(
    //     n.toString().split('').reverse().join('')
    // )
}
