#!/usr/bin/env node

{
    // first question
    let n = 19;
    for (let i = 1; i <= n; i++) {
        console.log(i)
    };
    console.log("First problem is solved !")
    console.clear();
}
// -----------
{
    // second question
    let n = 19;
    for (let i = 1; i <= n; i++) {
        console.log(n - i + 1)
    };
    console.log("Second problem is solved !");
    console.clear();
}
// -----------
{
    // third question
    let n = 12;
    let evenNumbers = [];
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(`Even Found: ${i}`)
            evenNumbers.push(i);
        } else {
            console.log(`Odd Number: ${i}`)
        }
    };
    console.log(`there are ${evenNumbers.length} even number in between 1 to ${n}`)
    console.log("Third problem solved !");
    console.clear();
}
// -----------
{
    // fourth question
    /*
    this is not good way to do this because this is brute force method.
    */
    // let n = 10000000000;
    console.time();
    let n = 32324;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    };
    console.log(`sum is ${sum}`);
    console.timeEnd();// this takes 0.944ms


    console.time();
    // let's optimize: sum of n number is 2(n + 1) / 2
    let result = (2 * (n + 1)) / 2;// this is the formula
    console.log(result);
    console.timeEnd();// this takes 0.042ms
}
// ------
{
    // fifth question
    let n = 15;
    let factorial = [1]
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            factorial.push(i);
        }
    };
    // console.log(factorial);
}

// -----
{
    // sixth question
    let n = 123;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    };
    console.log(sum); // this is working
}