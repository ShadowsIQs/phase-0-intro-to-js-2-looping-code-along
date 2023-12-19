const messages = []


function writeCards(kids, eventName){
    for (let i = 0; i < kids.length;  i++){
    messages.push (`Thank you, ${kids[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

function countDown(){
    let x = 10;
   while (x >= 0){
    console.log(x);
    x--;
   }
   
}

console.log(countDown)