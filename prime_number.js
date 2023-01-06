let number = 3;

let factor=0;
for(let i=1; i<=3; i++){

if(number%i==0){
 
 factor++;
  }
}
 
(factor==2) ? console.log("prime") : console.log("not prime");