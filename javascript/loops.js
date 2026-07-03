for(let i=1;i<=5;i++){
    console.log(i);
}

let count= 0;
while(count<=4){
    console.log(count);
    count++;
}

let num =1;
do{
    console.log(num);
    num++;
}
while(num<=6);

let person = {name:"sneha", age:16,city:"satara"}
for(let key in person){
    console.log(key,":",person[key]);
}

let colours=["red","pink","yellow"];
for(let colour of colours){
    console.log(colour);
}

let word="ReactJS";
for(let letter of word){
    console.log(letter);
}

for(let i=1;i<=4;i++){
    if(i===3){
        break;
    }
    console.log(i);
}

for(let i=1;i<=4;i++){
    if(i===3){
        continue;
    }
    console.log(i);
}