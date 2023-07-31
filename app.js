const scores = [22, 54, 76, 92, 43, 43]

for (let i =0; i< scores.length;i ++ )
{
    //console.log(scores[i]);
}


function foo(b){
    const a = 10;
  
    return a+b +11;
}

console.log(foo(2))

function bar(x){
    const y = 3;
    return foo(x*y);
}

const baz = bar(7);
console.log(baz)