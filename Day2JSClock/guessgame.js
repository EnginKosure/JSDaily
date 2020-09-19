const x=math.random()*100;
console.log(x);
const y=prompt('Guess the number')
if (x<y){
    alert('Lower, guess higher')
}else if(y<x){
    alert('High, guess lower')
}