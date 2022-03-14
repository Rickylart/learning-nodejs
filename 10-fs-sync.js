const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./first.txt','utf-8');
const second = readFileSync('./second.txt','utf-8');

console.log(first,second);

writeFileSync('./third.txt',`Here is the third file : ${first}, ${second}`,{flag:'a'});

console.log();

